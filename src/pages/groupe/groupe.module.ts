import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Groupe } from './groupe';

@NgModule({
  declarations: [
    Groupe,
  ],
  imports: [
    IonicPageModule.forChild(Groupe),
  ],
  exports: [
    Groupe
  ]
})
export class GroupeModule {}
