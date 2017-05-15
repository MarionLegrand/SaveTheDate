import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Pages
import { Accueil } from '../accueil/accueil';
import { Contact } from '../contact/contact';

// REST 
import { ListeContactsProvider } from '../../providers/liste-contacts-provider';

// DataStructure 
import { contactData } from '../../datastructure/contactData';
import { canal } from '../../datastructure/canal';

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
export class ListeContacts implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams,private provider:ListeContactsProvider) {
  }

  lesContacts: contactData[];


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeContacts');
  }

/*
  A l'initialisation de cette page, on appelle le provider afin qu'il nous fournisse
  tous les contacts qu'il à pour cet utilisateur 
*/
  ngOnInit() {
    // appel au serveur par le biais du provider
    this.provider.getUserContacts().subscribe(
      res => { this.lesContacts = res}
    )
  }



  retour() {
    this.navCtrl.push(Accueil);
  }

  profil(id:number) {
    this.navCtrl.push(Contact,{param1:id}); 
  }

}
