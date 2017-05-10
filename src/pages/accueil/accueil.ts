import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
// Pages de redirection 
import { MenuDeroulant1 } from '../menu-deroulant1/menu-deroulant1';

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class Accueil {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Accueil');
  }

  // Ouverture menu déroulant (Popover)
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(MenuDeroulant1);
    popover.present({
      ev: myEvent
    });
  }

}
