import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


// dataStructure
import { EventAbstract } from '../../dataStructure/eventList';
// REST
import { ListeEvenementProvider } from '../../providers/liste-evenement-provider'


/**
 * Generated class for the ListeEvenements page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-liste-evenements',
  templateUrl: 'liste-evenements.html',
  providers: [ListeEvenementProvider]
})
export class ListeEvenements implements OnInit {

  private lesEvents: EventAbstract[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: ListeEvenementProvider) {
    this.lesEvents = new Array<EventAbstract>();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeEvenements');
  }


  ngOnInit() {
    this.provider.getListeEvenementPasser().subscribe(
      res => { this.lesEvents = res }
    )
  }


}
