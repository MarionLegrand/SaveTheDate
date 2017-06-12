import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Pages
import { Accueil } from '../accueil/accueil';
import { Contact } from '../contact/contact';

// REST 
import { ListeContactsProvider } from '../../providers/liste-contacts-provider';
import { ISubscription } from "rxjs/Subscription";

// DataStructure 
import { contactData } from '../../dataStructure/contactData';
//import { canal } from '../../dataStructure/canal';

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
  providers: [ListeContactsProvider]
})
export class ListeContacts implements OnInit, OnDestroy {

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: ListeContactsProvider) {
  }

  private lesContacts: contactData[];
  private sub: ISubscription;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeContacts');
  }

  /*
    A l'initialisation de cette page, on appelle le provider afin qu'il nous fournisse
    tous les contacts qu'il à pour cet utilisateur 
  */
  ngOnInit() {
    // appel au serveur par le biais du provider
    this.sub = this.provider.getUserContacts().subscribe(
      res => { this.lesContacts = res }
    )
  }

  ngOnDestroy() {
    if(this.sub != null)
    this.sub.unsubscribe();
  }



  retour() {
    this.navCtrl.push(Accueil);
  }

  profil(id: number) {
    this.navCtrl.push(Contact, { param1: id });
  }

}
