import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Accueil } from '../accueil/accueil';
import { Contact } from '../contact/contact';

/**
 * Generated class for the ListeContacts page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-liste-contacts',
  templateUrl: 'liste-contacts.html',
})
export class ListeContacts {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeContacts');
  }

  retour(){
    this.navCtrl.push(Accueil);
  }

  profil(){
    this.navCtrl.push(Contact);
  }

}
