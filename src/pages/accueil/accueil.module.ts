import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Accueil } from './accueil';

@NgModule({
  declarations: [
    Accueil,
  ],
  imports: [
    IonicPageModule.forChild(Accueil),
  ],
  exports: [
    Accueil
  ]
})
export class AccueilModule {}
