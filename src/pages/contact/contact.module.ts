import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact } from './contact';

//datastrcuture
import { contactData } from '../../dataStructure/contactData';
import { canal } from '../../dataStructure/canal';
import { Tag } from '../../dataStructure/tag';

@NgModule({
  declarations: [
    Contact,
    contactData,
    canal,
    Tag

  ],
  imports: [
    IonicPageModule.forChild(Contact),
  ],
  exports: [
    Contact,
    contactData,
    canal,
    Tag
  ]
})
export class ContactModule {}
