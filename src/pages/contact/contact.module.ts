import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact } from './contact';

//datastrcuture
import { contactData } from '../../dataStructure/contactData';
import { canal } from '../../dataStructure/canal';
import { Tag } from '../../dataStructure/tag';
import { ModalContactAjoutTags } from '../modal-contact-ajout-tags/modal-contact-ajout-tags';

@NgModule({
  declarations: [
    Contact,
    contactData,
    canal,
    Tag, 
     ModalContactAjoutTags

  ],
  imports: [
    IonicPageModule.forChild(Contact),
  ],
  exports: [
    Contact,
    contactData,
    canal,
    Tag,
    ModalContactAjoutTags
  ]
})
export class ContactModule {}
