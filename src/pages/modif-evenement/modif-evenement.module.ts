import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifEvenement } from './modif-evenement';

@NgModule({
  declarations: [
    ModifEvenement,
  ],
  imports: [
    IonicPageModule.forChild(ModifEvenement),
  ],
  exports: [
    ModifEvenement
  ]
})
export class ModifEvenementModule {}
