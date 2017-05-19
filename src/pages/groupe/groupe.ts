import { Component, OnInit, OnDestroy} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

// rest
import { GroupeProvider } from '../../providers/groupe-provider';
//dataStrucuture
import { Tag } from '../../dataStructure/tag';
//page 
import { CreationTag } from '../creation-tag/creation-tag';

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
export class Groupe implements OnInit, OnDestroy {

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

  ngOnDestroy(){
    // TODO voir pour les unsubscribe
  }

/*
  To TEST 
  AJoute le tag directement depuis cette page plutot que de passer par une modale 
*/
  creerTag(lib:string) {
    let tag = new Tag();
    tag.libelle = lib;

    if(tag.libelle.length == 0){
      alert("Vous n'avez rien saisi !!");
      return;
    }
    
    this.provider.creerTag(tag).subscribe(
      res => {
        this.lesTags = null;
        this.loadData();
      })
}



loadData(){
  this.provider.getTags().subscribe(res => { this.lesTags = res })
}

/*
TODO safe delete sur le serveur 
*/
supprimerTag(){

}

}
