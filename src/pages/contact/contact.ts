import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// DataStructure 
import { contactData } from '../../dataStructure/contactData';
import { canal } from '../../dataStructure/canal';
import { Tag } from '../../dataStructure/tag';

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
  providers: [ContactProvider]
})
export class Contact implements OnInit {

  currentContact: contactData;
  tagsContact: any =[];//Tag[];
  canaux: canal[];
  test:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: ContactProvider) {
    this.canaux = new Array<canal>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contact');
  }

  ngOnInit() {
    // récupération des données du contact
    this.provider.getContact(this.navParams.get('param1')).subscribe(res => {
      this.currentContact = res;

      for (let can of this.currentContact.canaux as Array<canal>) {
        this.canaux.push(can);
       
      }

      this.provider.getContactTags(this.navParams.get('param1')).subscribe(
        res => {this.tagsContact = res;}
      )


   //   for (let t of this.currentContact.tags as Array<Tag>) {
    //    this.tagsContact.push(t);
     // }
    })

    // récupération des tags de ce contact
     this.provider.getContactTags(this.navParams.get('param1')).subscribe(res => { 
       this.tagsContact = res;console.log(res);
       this.test = Object.keys(this.tagsContact);
      })
  }


}