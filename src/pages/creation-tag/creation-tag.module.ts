import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreationTag } from './creation-tag';

@NgModule({
  declarations: [
    CreationTag,
  ],
  imports: [
    IonicPageModule.forChild(CreationTag),
  ],
  exports: [
    CreationTag
  ]
})
export class CreationTagModule {}
