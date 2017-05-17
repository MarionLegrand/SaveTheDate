import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreationEvenementModule } from './creation-evenement-module';
import { CreationEvenementInvitation } from '../creation-evenement-invitation/creation-evenement-invitation';
@NgModule({
  declarations: [
    CreationEvenementModule
  ],
  imports: [
    IonicPageModule.forChild(CreationEvenementModule),
  ],
  exports: [
    CreationEvenementModule
  ]
})
export class CreationEvenementModuleModule {}
