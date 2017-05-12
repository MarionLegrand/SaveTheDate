import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact  } from 'ionic-native';
// REST
import {SynchroContactProvider} from '../../providers/synchro-contact-provider';


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
  providers: []
})
export class SynchroContact {

  constructor(private navCtrl: NavController, public navParams: NavParams) {
    
  }
  
// les contactes trouvés
//public  allContacts:Contact[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad SynchroContact');
  }

/**
 * Cette méthode récupère les datas à propos des contacts du client
 * et les envois au serveur afin de facilement les invités aux évenements
 * et de collecter leurs réponses
 * Elle nécéssite le plugin cordova qui permet de récupèrer les contacts du téléphones 

getUserPhoneContacts(value:any){
  // on récupère les contacts du téléphone
 let fn = value === undefined ? '' :value;
    Contacts.find(['displayName', 'phoneNumbers'], {
      filter:fn,
      hasPhoneNumber:true
    }).then(data => {
      this.allContacts = data;      
});
  // on regarde si il y a plusieurs numéro

  // on regarde si il y a des mails 

  // Si il y a au moins 1 numéro en 06 ou un mail ou les 2 



}
 */

}
