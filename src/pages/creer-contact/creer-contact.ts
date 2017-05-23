import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'; // besoin de ça pour récupèrer infos formulaires
// DataStructure 
import { contactData } from '../../dataStructure/contactData';
import { canal } from '../../dataStructure/canal';
// provider
import { CreerContactProvider } from '../../providers/creer-contact-provider';
// page
import { Accueil } from '../accueil/accueil';

/**
 * Generated class for the CreerContact page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-creer-contact',
  templateUrl: 'creer-contact.html',
  providers: [CreerContactProvider]
})
export class CreerContact {

  private fg: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: CreerContactProvider, private fb: FormBuilder) {
    this.fg = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: [''],
      mail: ['']
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreerContact');
  }


  valider() {
    let contact = new contactData();
    contact.nom = this.fg.get('nom').value;
    contact.prenom = this.fg.get('prenom').value;
    
    let canals = new Array<canal>();
  
    let mail = new canal();

    if (this.fg.get('tel').value != "") {
      let telephone = new canal();
      telephone.typeCanal = "SMS";
      telephone.valeur = this.fg.get('tel').value;
      canals.push(telephone);
    }

    if (this.fg.get('mail').value != "") {
      mail.typeCanal = "MAIL";
      mail.valeur = this.fg.get('mail').value;
      canals.push(mail)
    }

    contact.canaux = canals;

    if(canals.length == 0){
       alert("Erreur aucun moyen de contacter ce contact ! ");
       return;
    }

    this.provider.creerContact(contact).subscribe(
      res => {
        alert("Contact créer ! ");
        this.navCtrl.push(Accueil);
      },
      err => {
        alert("Erreur ! ");
      }
    )
  }

  annuler() {
    this.navCtrl.push(Accueil);
  }


}
