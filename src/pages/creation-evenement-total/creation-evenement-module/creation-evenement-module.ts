import { Component, OnInit} from '@angular/core';
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
export class CreationEvenementModule implements OnInit {

  private id:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreationEvenementModule');
  }

  ngOnInit(){
    this.id = Number(this.navParams.get('id'));
    console.log(this.navParams.get('id'));
  }


  valider(){
    console.log(this.navParams.data.id);
    this.navCtrl.setRoot(CreationEvenementInvitation,{id:this.navParams.get('id')});
  }
}
