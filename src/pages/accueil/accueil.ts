import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
// Pages de redirection 
import { MenuDeroulant1 } from '../menu-deroulant1/menu-deroulant1';
import { Evenement } from '../evenement/evenement';
import { CreationEvenement } from '../creation-evenement-total/creation-evenement/creation-evenement';

//REST 
import { AccueilProvider } from '../../providers/accueil-provider';
import { ISubscription } from "rxjs/Subscription";
import { Observable } from 'rxjs/Observable';

// structure data
import { userAccueil } from '../../dataStructure/userAccueil';
import { EventAbstract } from '../../dataStructure/eventList';

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
  providers: [AccueilProvider]
})
export class Accueil implements OnDestroy {

  private user: userAccueil;
  private events: EventAbstract[];
  private eventsEnPreparation: EventAbstract[];
  private subs: ISubscription[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController
    , private provider: AccueilProvider) {
    this.user = new userAccueil();
    // this.events = new Array<EventsAVenir>();
    this.eventsEnPreparation = new Array<EventAbstract>();
    this.events = new Array<EventAbstract>();
    this.subs = new Array<ISubscription>();
  }

  ionViewDidLoad() {
  }

  // à l'initialisation de la page on récupère les données utilisateur 
  ngOnInit() {
    this.loadData();
    // on récupère les infos de l'utilisateur grâce à son id 
    var x = this.provider.getUserData()
      .subscribe(res => this.user = res,
      err => console.log(err)
      );
    this.subs.push(x);

    let timer = Observable.timer(2000, 15000);
    timer.subscribe(t => {
      this.loadData();
    });

    // puis on récupère les évenements à venir 
    /*
    var y = this.provider.getEventsAVenirData()
      .subscribe(res => this.events = res,
      err => { console.log(err); console.log(this.events) }
      );
    this.subs.push(y);
    */
  }


  loadData() {
    var y = this.provider.getDatasEvent().subscribe(
      data => {
        this.events = data[0];
        this.eventsEnPreparation = data[1];
      }
    )
    this.subs.push(y);
  }

  ngOnDestroy() {
    this.subs.forEach(elem => {
      if (elem != null)
        elem.unsubscribe();
    })
  }

  openEventPage(id: number) {
    this.navCtrl.push(Evenement, { paramId: id }); // on passe en parametre l'id de l'event afin de pouvoir requêter le serveur sur cet evenement 
  }

  CreerEvenement() {
    this.navCtrl.push(CreationEvenement);
  }

  // Ouverture menu déroulant (Popover)
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(MenuDeroulant1);
    popover.present({
      ev: myEvent
    });
  }

  public coucou() {
    console.log("coucou");
  }
}
