import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
// Pages de redirection 
import { MenuDeroulant1 } from '../menu-deroulant1/menu-deroulant1';

//REST 
import { AccueilProvider } from '../../providers/accueil-provider';

// structure data
import { userAccueil } from '../../dataStructure/userAccueil';


@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
  providers: [AccueilProvider]
})
export class Accueil {

  private user: userAccueil;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController
    , private provider: AccueilProvider) {
      this.user = new userAccueil();
  }

  ionViewDidLoad() {
  }

  // à l'initialisation de la page on récupère les données utilisateur 
  ngOnInit() {

    // on récupère les infos de l'utilisateur grâce à son id 
    this.provider.getUserData(Number(localStorage.getItem('token')))
      .subscribe(res => this.user = res,
      err => console.log(err)
      );

    // puis on récupère les évenements à venir 


  }





  // Ouverture menu déroulant (Popover)
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(MenuDeroulant1);
    popover.present({
      ev: myEvent
    });
  }

}
