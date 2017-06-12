import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// page redirection si on a pas de tags
import { Groupe } from '../groupe/groupe';
// datastructure
import { Tag } from '../../dataStructure/tag';
//rest
import { ModalContactAjoutTagsProvider } from '../../providers/modal-contact-ajout-tags-provider';
import { ISubscription } from "rxjs/Subscription";

/**
 * Generated class for the ModalContactAjoutTags page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-contact-ajout-tags',
  templateUrl: 'modal-contact-ajout-tags.html',
  providers: [ModalContactAjoutTagsProvider]
})
export class ModalContactAjoutTags implements OnInit, OnDestroy {

  private lesTags: Tag[];
  private lesTagsSelection: number[]; // tableau contenant les id tags checked
  private lesindex: number[];
  private subs: ISubscription[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: ModalContactAjoutTagsProvider, private viewCtrl: ViewController) {
    this.lesTagsSelection = new Array<number>();
    this.lesindex = new Array<number>();
    this.subs = new Array<ISubscription>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalContactAjoutTags');
  }

  ngOnInit() {
    var x = this.provider.getAllUserTags().subscribe(res => {
      this.lesTags = res
    });
    this.subs.push(x);
  }

  redirection() {
    this.navCtrl.push(Groupe);
  }

  ngOnDestroy() {
    this.subs.forEach(elem => {
      if (elem != null)
        elem.unsubscribe();
    })
  }


  addTagTab(id: number) {

    // boucle de recherche dans le tableau
    if (this.lesTagsSelection.length == 0) {
      this.lesTagsSelection.push(id);
    } else {
      // si il contient déjà des tags on fait une boucle
      let i = 0;
      for (let n of this.lesTagsSelection) {
        if (n === id) {
          this.lesTagsSelection.splice(i); // on l'enleve si il y est déjà 
          return;
        }
        i++;
      }
      this.lesTagsSelection.push(id);
    }
  }

  /*
    affecte le tag à cet utilisateur 
  */
  affecterTag() {
    console.log(this.lesTagsSelection);
    for (let id of this.lesTagsSelection) {
      var x = this.provider.affecterTagUser(id, this.navParams.get('id')).subscribe();
      this.subs.push(x);
    }
    this.viewCtrl.dismiss(); // ferme le modal
  }


}
