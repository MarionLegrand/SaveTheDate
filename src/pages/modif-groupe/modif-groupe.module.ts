import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifGroupe } from './modif-groupe';

@NgModule({
  declarations: [
    ModifGroupe,
  ],
  imports: [
    IonicPageModule.forChild(ModifGroupe),
  ],
  exports: [
    ModifGroupe
  ]
})
export class ModifGroupeModule {}
