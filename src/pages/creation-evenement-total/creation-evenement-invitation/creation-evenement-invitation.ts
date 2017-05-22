import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

import { Accueil } from '../../accueil/accueil';

// REST
import { CreationEvenementInvitationProvider } from '../../../providers/creation-evenement-invitation-provider';

// DataStructure
import { contactData } from '../../../dataStructure/contactData';
import { Tag } from '../../../dataStructure/tag';
import { EvenementData } from '../../../dataStructure/evenement';
/**
 * Generated class for the CreationEvenementInvitation page.
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-creation-evenement-invitation',
  templateUrl: 'creation-evenement-invitation.html',
  providers: [CreationEvenementInvitationProvider]
})
export class CreationEvenementInvitation implements OnInit {

  invite: contactData[];
  tagNonInvite: Tag[];
  contactNonInvite: contactData[];

  addPostContacts: contactData[];
  addPostTags: Tag[];
  removePostContact: contactData[];
  removePostTags: Tag[];

  evenement: EvenementData;

  private msg: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private modalCtrl: ModalController,
    private provider: CreationEvenementInvitationProvider) {

    this.evenement = new EvenementData();
    this.contactNonInvite = new Array<contactData>();
    this.invite = new Array<contactData>();
    this.tagNonInvite = new Array<Tag>();

    this.addPostContacts = new Array<contactData>();
    this.addPostTags = new Array<Tag>();
    this.removePostContact = new Array<contactData>();
    this.removePostTags = new Array<Tag>();

    this.msg = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreationEvenementInvitation');
  }


  ngOnInit() {
    this.loadData();

    // récupération pour le messages
    this.provider.getMessage(this.navParams.get('id')).subscribe(
    res => { this.evenement = res })
  }

  valider() {
    // envoyer les tableau d'invitations au serveur 
    this.showSuccestAlert();
  }

  validerInvitation() {
    this.provider.setActionInvitation(this.navParams.get('id'), this.addPostContacts, this.addPostTags, this.removePostContact, this.removePostTags,this.evenement)
      .subscribe(res => { this.loadData(); })
  }


  inviterContact(contact: contactData) {
    let id = this.addPostContacts.indexOf(contact);

    if (id > -1)
      this.addPostContacts.splice(id);
    else
      this.addPostContacts.push(contact);
  }

  retirerContact(contact: contactData) {
    let id = this.removePostContact.indexOf(contact);

    if (id > -1)
      this.removePostContact.splice(id);
    else
      this.removePostContact.push(contact);
  }

  ajouterTag(tag: Tag) {
    let id = this.addPostTags.indexOf(tag);

    if (id > -1)
      this.addPostTags.splice(id);
    else
      this.addPostTags.push(tag);
  }

  retirerTag(tag: Tag) {
    let id = this.removePostTags.indexOf(tag);

    if (id > -1)
      this.removePostTags.splice(id);
    else
      this.removePostTags.push(tag);
  }

  /*
    Load data depuis le serveur
  */
  loadData() {
    console.log(this.evenement.message);
    this.contactNonInvite = new Array<contactData>();
    this.invite = new Array<contactData>();
    this.tagNonInvite = new Array<Tag>();

    this.addPostContacts = new Array<contactData>();
    this.addPostTags = new Array<Tag>();
    this.removePostContact = new Array<contactData>();
    this.removePostTags = new Array<Tag>();

    this.provider.getDifferentListeInvite(this.navParams.get('id')).subscribe(
      data => {
        this.invite = data[0];
        this.contactNonInvite = data[1];
        this.tagNonInvite = data[2];
        console.log(this.evenement.message);
      })
  }

  /*
   Montre une alerte lorsque la date est inférieure ou égale à celle du jours
  */
  showSuccestAlert() {

    let alert = this.alertCtrl.create({
      title: 'Bravo !',
      subTitle: 'Votre événement est désormais crée mais pas validé, vous pouvez le modifier à tout moment. (Les invitations seront envoyés seulement aprés validation)',
      buttons: [{
        text: 'OK',
        role: null,
        handler: () => {
          this.navCtrl.push(Accueil);
          return false;
        }
      }
      ]
    });
    alert.present();
  }

}

