import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'; // besoin de ça pour récupèrer infos formulaires
// pages
import { CreationEvenementInvitation } from '../creation-evenement-invitation/creation-evenement-invitation';
// providers
import { CreationEvenementModuleProvider } from '../../../providers/creation-evenement-module-provider';
import { ISubscription } from "rxjs/Subscription";
// DataStructure 
import { article } from '../../../dataStructure/article';

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
  providers:[CreationEvenementModuleProvider]
})
export class CreationEvenementModule implements OnInit {

  private id: number;
  private moduleListe: boolean;

  private fg: FormGroup;
  private subs: ISubscription[];

  //Array d'article
  private liste: article[];
  private listeIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder,
   private provider:CreationEvenementModuleProvider) {
    this.moduleListe = false;

    this.fg = this.fb.group({
      produit: ['', Validators.required],
      qte: ['', Validators.required],
    });

    this.liste = new Array<article>();
    this.listeIndex = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreationEvenementModule');
  }

  ngOnInit() {
    this.id = Number(this.navParams.get('id'));
    console.log(this.navParams.get('id'));
  }

  activerModuleListe() {
    this.moduleListe = !this.moduleListe;
  }

  ajouterArticle() {
    var art = new article();
    art.id = this.listeIndex;
    art.produit = this.fg.get('produit').value;
    art.qte = Number(this.fg.get('qte').value);

    this.listeIndex++;

    this.liste.push(art);

    this.fg.get('produit').setValue('');
    this.fg.get('qte').setValue('');
  }

  retirerArticle(art: article) {
    let id = this.liste.indexOf(art);

    if (id > -1)
      this.liste.splice(id);
  }

  valider() {
    console.log(this.navParams.data.id);
    this.navCtrl.setRoot(CreationEvenementInvitation, { id: this.navParams.get('id') });
  }
}
