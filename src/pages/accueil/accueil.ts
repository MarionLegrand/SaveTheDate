import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
// Pages de redirection 
import { MenuDeroulant1 } from '../menu-deroulant1/menu-deroulant1';
import { Evenement } from '../evenement/evenement';

//REST 
import { AccueilProvider } from '../../providers/accueil-provider';

// structure data
import { userAccueil } from '../../dataStructure/userAccueil';
import { EventsAVenir } from '../../dataStructure/eventsAccueil';

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
  providers: [AccueilProvider]
})
export class Accueil {

  private user: userAccueil;
  private events: EventsAVenir[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController
    , private provider: AccueilProvider) {
      this.user = new userAccueil();
     // this.events = new Array<EventsAVenir>();
  }

  ionViewDidLoad() {
  }

  // à l'initialisation de la page on récupère les données utilisateur 
  ngOnInit() {

    // on récupère les infos de l'utilisateur grâce à son id 
    this.provider.getUserData()
      .subscribe(res => this.user = res,
      err => console.log(err)
      );

    // puis on récupère les évenements à venir 
    this.provider.getEventsAVenirData()
    .subscribe(res => this.events = res,
    err => {console.log(err); console.log(this.events)}
    );

  }

openEventPage(id:number){
    this.navCtrl.push(Evenement,{paramId:id}); // on passe en parametre l'id de l'event afin de pouvoir requêter le serveur sur cet evenement 
}




  // Ouverture menu déroulant (Popover)
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(MenuDeroulant1);
    popover.present({
      ev: myEvent
    });
  }

}
