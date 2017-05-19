import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Accueil } from '../../accueil/accueil';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreationEvenementInvitation');
  }

  valider() {
    this.showSuccestAlert();
  }

  /*
   Montre une alerte lorsque la date est inférieure ou égale à celle du jours
 */
  showSuccestAlert() {

    let alert = this.alertCtrl.create({
      title: 'Bravo !',
      subTitle: 'Votre événement est désormais crée mais pas validé, vous pouvez le modifier à tout moment. (Les invitations seront envoyés seulement aprés validation)',
      buttons: [{
        text: 'OK',
        role: null,
        handler: () => {
          this.navCtrl.setRoot(Accueil);
          return false;
        }
      }
      ]
    });
    alert.present();

  }

}

