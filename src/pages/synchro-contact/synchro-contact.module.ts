import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SynchroContact } from './synchro-contact';

@NgModule({
  declarations: [
    SynchroContact,
  ],
  imports: [
    IonicPageModule.forChild(SynchroContact),
  ],
  exports: [
    SynchroContact
  ]
})
export class SynchroContactModule {}
