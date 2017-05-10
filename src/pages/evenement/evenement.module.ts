import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Evenement } from './evenement';

@NgModule({
  declarations: [
    Evenement,
  ],
  imports: [
    IonicPageModule.forChild(Evenement),
  ],
  exports: [
    Evenement
  ]
})
export class EvenementModule {}
