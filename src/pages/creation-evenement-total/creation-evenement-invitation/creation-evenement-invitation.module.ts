import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreationEvenementInvitation } from './creation-evenement-invitation';

@NgModule({
  declarations: [
    CreationEvenementInvitation,
  ],
  imports: [
    IonicPageModule.forChild(CreationEvenementInvitation),
  ],
  exports: [
    CreationEvenementInvitation
  ]
})
export class CreationEvenementInvitationModule {}
