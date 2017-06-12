import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

// rest
import { GroupeProvider } from '../../providers/groupe-provider';
import { ISubscription } from "rxjs/Subscription";
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

  private lesTags: Tag[];
  private subs: ISubscription[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: GroupeProvider, private modalCtrl: ModalController) {
    this.lesTags = new Array<Tag>();
    this.subs = new Array<ISubscription>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Groupe');
  }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.subs.forEach(elem => {
      if (elem != null)
        elem.unsubscribe();
    })
  }

  /*
    AJoute le tag directement depuis cette page plutot que de passer par une modale 
  */
  creerTag(lib: string) {
    let tag = new Tag();
    tag.libelle = lib;

    if (tag.libelle.length == 0) {
      alert("Vous n'avez rien saisi !!");
      return;
    }

    var x = this.provider.creerTag(tag).subscribe(
      res => {
        this.lesTags = null;
        this.loadData();
      });
    this.subs.push(x);
  }



  loadData() {
    var x = this.provider.getTags().subscribe(res => { this.lesTags = res });
    this.subs.push(x);
  }

  /*
  TODO safe delete sur le serveur 
  */
  supprimerTag() {

  }

}
