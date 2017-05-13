import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SynchroContact } from './synchro-contact';
import { Contacts} from '@ionic-native/contacts';

@NgModule({
  declarations: [
    SynchroContact,
    Contacts
  ],
  imports: [
    IonicPageModule.forChild(SynchroContact),
  ],
  exports: [
    SynchroContact,
    Contacts
  ]
})
export class SynchroContactModule {}
