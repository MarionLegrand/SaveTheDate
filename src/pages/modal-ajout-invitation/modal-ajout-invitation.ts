import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
// REST
import { CreationEvenementInvitationProvider } from '../../providers/creation-evenement-invitation-provider'; // on le réutilise car + simple
// DATASTRUCTURE
import { Tag } from '../../dataStructure/tag';
import { contactData } from '../../dataStructure/contactData';


/**
 * Generated class for the ModalAjoutInvitation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-ajout-invitation',
  templateUrl: 'modal-ajout-invitation.html',
  providers: [CreationEvenementInvitationProvider]
})
export class ModalAjoutInvitation implements OnInit {

  private contactsNonInvites: contactData[];
  private contactAInviter: contactData[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private provider: CreationEvenementInvitationProvider) {
    this.contactsNonInvites = new Array<contactData>();
    this.contactAInviter = new Array<contactData>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAjoutInvitation');
  }

  ngOnInit() {
    this.loadData();
  }

  actionArray(contact:contactData) {
    let index = this.contactAInviter.indexOf(contact);

    if(index > -1)
    this.contactAInviter.splice(index);
    else
    this.contactAInviter.push(contact);
  }


  retour() {
    this.view.dismiss();
  }

  valider() {
    console.log(this.contactAInviter);
    this.provider.inviterContacts(this.view.data.id,this.contactAInviter).subscribe(
      res => { this.retour(); }
    )
  }

  loadData() {
    console.log(this.view.data.id);
    this.provider.getListeNonInvites(this.view.data.id).subscribe(
      res => { this.contactsNonInvites = res }
    )
  }




}
