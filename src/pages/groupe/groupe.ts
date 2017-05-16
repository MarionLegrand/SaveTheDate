import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';

// rest
import { GroupeProvider } from '../../providers/groupe-provider';
//dataStrucuture
import { Tag } from '../../dataStructure/tag';
//page 
import {CreationTag} from '../creation-tag/creation-tag';

/**
 * Generated class for the Groupe page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-groupe',
  templateUrl: 'groupe.html',
  providers: [GroupeProvider]
})
export class Groupe implements OnInit {

  lesTags: Tag[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: GroupeProvider, private modalCtrl: ModalController) {
    this.lesTags = new Array<Tag>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Groupe');
  }

  ngOnInit() {
    this.loadData();
  }

creerTag(){
let modal = this.modalCtrl.create(CreationTag);
    modal.onDidDismiss(
      () => {
        this.lesTags = null;
        this.loadData();
      }
    )
    modal.present();
}

loadData(){
this.provider.getTags().subscribe( res => {this.lesTags = res})
}

/*
TODO safe delete sur le serveur 
*/
supprimerTag(){

}

}
