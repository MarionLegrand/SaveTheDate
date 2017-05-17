import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreationEvenement } from './creation-evenement';

@NgModule({
  declarations: [
    CreationEvenement,
  ],
  imports: [
    IonicPageModule.forChild(CreationEvenement),
  ],
  exports: [
    CreationEvenement
  ]
})
export class CreationEvenementModule {}
