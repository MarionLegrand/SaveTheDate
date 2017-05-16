import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalContactAjoutTags } from './modal-contact-ajout-tags';

import {Groupe} from '../groupe/groupe';

@NgModule({
  declarations: [
    ModalContactAjoutTags,
    Groupe
  ],
  imports: [
    IonicPageModule.forChild(ModalContactAjoutTags),
  ],
  exports: [
    ModalContactAjoutTags,
      Groupe
  ]
})
export class ModalContactAjoutTagsModule {}
