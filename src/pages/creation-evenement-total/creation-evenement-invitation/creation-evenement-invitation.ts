import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Accueil} from '../../accueil/accueil';


/**
 * Generated class for the CreationEvenementInvitation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-creation-evenement-invitation',
  templateUrl: 'creation-evenement-invitation.html',
})
export class CreationEvenementInvitation {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreationEvenementInvitation');
  }

  valider(){
    this.navCtrl.setRoot(Accueil);
  }

}
