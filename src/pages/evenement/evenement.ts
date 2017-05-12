import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Evenement page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-evenement',
  templateUrl: 'evenement.html',
})
export class Evenement {

  private idEvent:number

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idEvent = this.navParams.get('paramId'); // on récupère l'id de l'évenement 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Evenement');
  }

}
