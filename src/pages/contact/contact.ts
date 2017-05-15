import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// DataStructure 
import { contactData } from '../../datastructure/contactData';
import { canal } from '../../datastructure/canal';
import { Tag } from '../../datastructure/tag';

// rest 
import { ContactProvider } from '../../providers/contact-provider'

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
})
export class Contact implements OnInit {

  currentContact: contactData;
  tagsContact: Tag[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: ContactProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contact');
  }

  ngOnInit() {
    // récupération des données du contact
    this.provider.getContact(this.navParams.get('param1')).subscribe(res => { this.currentContact = res })

    // récupération des tags de ce contact
    this.provider.getContactTags(this.navParams.get('param1')).subscribe(res => { this.tagsContact = res })
  }


}
