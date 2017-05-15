import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeContacts } from './liste-contacts';

//datastrcuture
import { contactData } from '../../dataStructure/contactData';
//import { canal } from '../../dataStructure/canal';
import { Tag } from '../../dataStructure/tag';

@NgModule({
  declarations: [
    ListeContacts,
    contactData,
 //   canal,
    Tag
  ],
  imports: [
    IonicPageModule.forChild(ListeContacts),
  ],
  exports: [
    ListeContacts,
    contactData,
    //canal,
    Tag
  ]
})
export class ListeContactsModule {}
