import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreationCompte } from './creation-compte';

@NgModule({
  declarations: [
    CreationCompte,
  ],
  imports: [
    IonicPageModule.forChild(CreationCompte),
  ],
  exports: [
    CreationCompte
  ]
})
export class CreationCompteModule {}
