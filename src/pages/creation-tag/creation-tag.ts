import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

import { CreationTagProvider} from '../../providers/creation-tag-provider';
import { Tag } from '../../dataStructure/tag';
/**
 * Generated class for the CreationTag page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-creation-tag',
  templateUrl: 'creation-tag.html',
  providers:[CreationTagProvider]
})
export class CreationTag {

  libelle:string; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider:CreationTagProvider, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreationTag');
  }

/*
  TODO mettre un vérification sur la longeur du tag => éviter les chaines vide
*/
  creerTag(rec:string){
    if(rec === ""){
      alert("Vous ne pouvez pas créer un tag vide");
      return;
    }
    
    let tag = new Tag();
  
    tag.libelle = rec;
   
    this.provider.creerTag(tag).subscribe(
      () => { 
        this.viewCtrl.dismiss()
      },
      err => {
        alert("tag déjà existant"); // to test 
      }
    )

  }

}
