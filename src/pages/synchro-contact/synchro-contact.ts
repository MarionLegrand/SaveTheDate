import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts/*, Contact*/ } from '@ionic-native/contacts';
// REST
import { SynchroContactProvider } from '../../providers/synchro-contact-provider';
import { Accueil } from '../accueil/accueil';

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
export class SynchroContact {

  constructor(private navCtrl: NavController, public navParams: NavParams, private contacts: Contacts) {

  }

  // les contactes trouvés
  //public allContacts: Contact[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad SynchroContact');
  }

  /**
   * Cette méthode récupère les datas à propos des contacts du client
   * et les envois au serveur afin de facilement les invités aux évenements
   * et de collecter leurs réponses
   * Elle nécéssite le plugin cordova qui permet de récupèrer les contacts du téléphones 
  */
  getUserPhoneContacts(value: any) {
    // on récupère les contacts du téléphone
    this.contacts.find(['displayName', 'name', 'nickname'], { filter: '' })
      .then(
      cont => { /*this.allContacts = cont*/alert(cont[0].name); })
    //this.navCtrl.push(Accueil);

    // boucle sur le tableau

    // on regarde si il y a plusieurs numéro dont un en 06
    // on renvoi le premier 06 

    // on regarde si il y a des mails 

    // on créer la structure du contact pour notre tableau en json 

    // on l'ajoute à notre tableau 


    // on passe le tableau des contacts au provider pour qu'il les envoi au serveur 
  }


}
