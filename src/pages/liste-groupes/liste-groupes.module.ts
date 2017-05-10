import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeGroupes } from './liste-groupes';

@NgModule({
  declarations: [
    ListeGroupes,
  ],
  imports: [
    IonicPageModule.forChild(ListeGroupes),
  ],
  exports: [
    ListeGroupes
  ]
})
export class ListeGroupesModule {}
