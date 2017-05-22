import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAjoutInvitation } from './modal-ajout-invitation';

@NgModule({
  declarations: [
    ModalAjoutInvitation,
  ],
  imports: [
    IonicPageModule.forChild(ModalAjoutInvitation),
  ],
  exports: [
    ModalAjoutInvitation
  ]
})
export class ModalAjoutInvitationModule {}
