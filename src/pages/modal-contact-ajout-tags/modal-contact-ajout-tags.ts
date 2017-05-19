import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// page redirection si on a pas de tags
import { Groupe } from '../groupe/groupe';
// datastructure
import { Tag } from '../../dataStructure/tag';
//rest
import { ModalContactAjoutTagsProvider } from '../../providers/modal-contact-ajout-tags-provider';

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
export class ModalContactAjoutTags implements OnInit {

  lesTags: Tag[];
  lesTagsSelection: number[]; // tableau contenant les id tags checked
  lesindex: number[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: ModalContactAjoutTagsProvider, private viewCtrl: ViewController) {
    this.lesTagsSelection = new Array<number>();
    this.lesindex = new Array<number>();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalContactAjoutTags');
  }


  ngOnInit() {
    this.provider.getAllUserTags().subscribe(res => {
      this.lesTags = res
    });
  }

  redirection() {
    this.navCtrl.push(Groupe);
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
      this.provider.affecterTagUser(id, this.navParams.get('id')).subscribe();
    }
    this.viewCtrl.dismiss(); // ferme le modal
  }


}
