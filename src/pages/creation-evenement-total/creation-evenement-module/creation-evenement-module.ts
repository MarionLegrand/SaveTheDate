import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// rest

// pages
import { CreationEvenementInvitation } from '../creation-evenement-invitation/creation-evenement-invitation';


/**
 * Generated class for the CreationEvenementModule page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-creation-evenement-module',
  templateUrl: 'creation-evenement-module.html',
})
export class CreationEvenementModule {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreationEvenementModule');
  }

  valider(){
    this.navCtrl.setRoot(CreationEvenementInvitation);
  }
}
