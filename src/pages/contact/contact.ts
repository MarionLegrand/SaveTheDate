import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

// DataStructure 
import { contactData } from '../../dataStructure/contactData';
import { canal } from '../../dataStructure/canal';
import { Tag } from '../../dataStructure/tag';

// rest 
import { ContactProvider } from '../../providers/contact-provider'

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
export class Contact implements OnInit {

  currentContact: contactData;
  tagsContact: Tag[];
  canaux: canal[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: ContactProvider
    , private modalCtrl: ModalController) {

    this.canaux = new Array<canal>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contact');
  }

  ngOnInit() {
    this.loadData();
  }


  ajouterTag() {
    let modal = this.modalCtrl.create(ModalContactAjoutTags, { id: this.currentContact.id, idTags: this.tagsContact});
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
    this.provider.desaffecterTagUser(id, this.currentContact.id).subscribe(
      () => {
        this.tagsContact = null;
        this.loadData();
      }
    );
  }

  loadData() {
    // récupération des données du contact
    this.provider.getContact(this.navParams.get('param1')).subscribe(res => {
      this.currentContact = res;
    })

    this.provider.getContactTags(this.navParams.get('param1')).subscribe(
      res => { this.tagsContact = res; }
    )

    this.provider.getCanalsContact(this.navParams.get('param1')).subscribe(
      res => { this.canaux = res }
    )
  }


}