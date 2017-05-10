import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeEvenements } from './liste-evenements';

@NgModule({
  declarations: [
    ListeEvenements,
  ],
  imports: [
    IonicPageModule.forChild(ListeEvenements),
  ],
  exports: [
    ListeEvenements
  ]
})
export class ListeEvenementsModule {}
