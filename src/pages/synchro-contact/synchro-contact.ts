import { Component, OnDestroy} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact } from '@ionic-native/contacts';
// Pages
import { Accueil } from '../accueil/accueil';

// REST
import { SynchroContactProvider } from '../../providers/synchro-contact-provider';
import { ISubscription } from "rxjs/Subscription";

// dataStructure
import { canal } from '../../dataStructure/canal';
import { contactData } from '../../dataStructure/contactData';


/**
 * Generated class for the SynchroContact page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-synchro-contact',
  templateUrl: 'synchro-contact.html',
  providers: [SynchroContactProvider, Contacts]
})
export class SynchroContact implements OnDestroy{

  constructor(private navCtrl: NavController, public navParams: NavParams, private contacts: Contacts, private provider: SynchroContactProvider) {
    this.contactToSend = new Array<contactData>();
    this.subs = new Array<ISubscription>();
  }

  // les contactes trouvés
  public allContacts: Contact[];
  private contactToSend: contactData[];
  private subs: ISubscription[];

  ionViewDidLoad() {

  }

  ngOnDestroy() {
    this.subs.forEach(elem => {
      if (elem != null)
        elem.unsubscribe();
    })
  }


  /**
   * Cette méthode récupère les datas à propos des contacts du client
   * et les envois au serveur afin de facilement les invités aux évenements
   * et de collecter leurs réponses
   * Elle nécéssite le plugin cordova qui permet de récupèrer les contacts du téléphones 
  */
  getUserPhoneContacts() {
    // on récupère les contacts du téléphone

    this.contacts.find(['*'], { filter: '' })
      .then(
      cont => {
        this.allContacts = cont;

        // boucle sur le tableau
        for (let c of this.allContacts) {
          var cd = new contactData;
          var tabCanaux = new Array<canal>();
          var currentPhone = new canal();

          // on regarde si il y a plusieurs
          if (c.phoneNumbers != null)
            if (c.phoneNumbers.length > 0) {
              for (let tel of c.phoneNumbers)
                // numéro dont un en 06 ou 07 ou +33 06 ou 07 
                if ((tel.value.startsWith("06") || tel.value.startsWith("07")) || (tel.value.startsWith("+33 6") || tel.value.startsWith("+33 7"))) {
                  currentPhone.typeCanal = "SMS";
                  currentPhone.valeur = tel.value;
                  tabCanaux.push(currentPhone);// ajout au tableau  

                  break; // on sort de la boucle
                }
            }

          // on regarde si il y a des mails 
          if (c.emails != null)
            if (c.emails.length > 0) {
              for (let mail of c.emails) {
                var currentMail = new canal();
                currentMail.typeCanal = "MAIL";
                currentMail.valeur = mail.value;
                tabCanaux.push(currentMail); // ajout au tableau 
                break; // on sort 
              }
            }

          // on créer la structure du contact pour notre tableau en json 
          cd.nom = c.name.familyName;
          cd.prenom = c.name.givenName;
          cd.canaux = tabCanaux;

          // on l'ajoute à notre tableau
          if (cd.canaux.length > 0 && (c.name.familyName != undefined || c.name.givenName != undefined))
            this.contactToSend.push(cd);
        }

        // on envoi le tableau qui l'enverra au provider
        var x = this.provider.sendContactsDataToserver(this.contactToSend).subscribe();
        this.subs.push(x);

        this.navCtrl.pop(); //test
        this.navCtrl.setRoot(Accueil);
      })

  }

  /*
    a supprimer quand on aura terminé pour forcer le passage dans 
    la synchro
  */
  Asupprimer() {
    this.navCtrl.pop(); //test
    this.navCtrl.setRoot(Accueil);
  }


}
