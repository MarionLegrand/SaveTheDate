import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

// DataStructure 
import { contactData } from '../../dataStructure/contactData';
import { canal } from '../../dataStructure/canal';
import { Tag } from '../../dataStructure/tag';

// rest 
import { ContactProvider } from '../../providers/contact-provider'
import { ISubscription } from "rxjs/Subscription";
//pages
import { ModalContactAjoutTags } from '../modal-contact-ajout-tags/modal-contact-ajout-tags';

/**
 * Generated class for the Contact page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [ContactProvider]
})
export class Contact implements OnInit, OnDestroy {

  private currentContact: contactData;
  private tagsContact: Tag[];
  private canaux: canal[];
  private subs: ISubscription[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: ContactProvider
    , private modalCtrl: ModalController) {

    this.canaux = new Array<canal>();
    this.subs = new Array<ISubscription>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contact');
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


  ajouterTag() {
    let modal = this.modalCtrl.create(ModalContactAjoutTags, { id: this.currentContact.id, idTags: this.tagsContact });
    modal.onDidDismiss(
      () => {
        this.tagsContact = null;
        this.loadData();
      }
    )
    modal.present();
  }

  /*
   Supprime l'association entre le contact et le tag 
  */
  supprimerTag(id: number) {
    var x = this.provider.desaffecterTagUser(id, this.currentContact.id).subscribe(
      () => {
        this.tagsContact = null;
        this.loadData();
      }
    );
    this.subs.push(x);
  }

  loadData() {
    // récupération des données du contact
    var x = this.provider.getContact(this.navParams.get('param1')).subscribe(res => {
      this.currentContact = res;
    })
    this.subs.push(x);

    var y = this.provider.getContactTags(this.navParams.get('param1')).subscribe(
      res => { this.tagsContact = res; }
    )
    this.subs.push(y);

    var z = this.provider.getCanalsContact(this.navParams.get('param1')).subscribe(
      res => { this.canaux = res }
    )
    this.subs.push(z);
  }


}