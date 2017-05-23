import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Pages de redirection 
import { HomePage } from '../home/home';
import { ListeContacts } from '../liste-contacts/liste-contacts';
import { ListeEvenements } from '../liste-evenements/liste-evenements';
import { Groupe } from '../groupe/groupe';
import { CreationEvenement } from '../creation-evenement-total/creation-evenement/creation-evenement';
import { CreerContact } from '../creer-contact/creer-contact'; 
/**
 * Generated class for the MenuDeroulant1 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  template: `
    <ion-list>
     <button ion-item (click)="creerEvenement()">Créer un événement</button>
      <button ion-item (click)="ajouterContact()">Créer un nouveau contact</button>
      <button ion-item (click)="events()">Liste des évènements</button>
      <button ion-item (click)="contacts()">Liste des contacts</button>
      <button ion-item (click)="groups()">Liste des groupes</button>
      <button ion-item (click)="deconnexion()">Déconnexion</button>
    </ion-list>
  `
})
// Menu déroulant affiché à partir de la page d'accueil 
export class MenuDeroulant1 {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuDeroulant1');
  }

 

  // redirection sur la liste des évènements 
  events() {
    this.navCtrl.push(ListeEvenements);
  }

  // redirection sur la liste des contacts 
  contacts() {
    this.navCtrl.push(ListeContacts);
  }

  // redirection sur la liste des groupes 
  groups() {
    this.navCtrl.push(Groupe);
  }

  deconnexion() {
    localStorage.removeItem('token'); // on nettoie le token
    this.navCtrl.push(HomePage);
  }

  creerEvenement() {
    this.navCtrl.push(CreationEvenement);
  }

  ajouterContact(){
     this.navCtrl.push(CreerContact);
  }

}
