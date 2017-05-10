import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Parametrage } from './parametrage';

@NgModule({
  declarations: [
    Parametrage,
  ],
  imports: [
    IonicPageModule.forChild(Parametrage),
  ],
  exports: [
    Parametrage
  ]
})
export class ParametrageModule {}
