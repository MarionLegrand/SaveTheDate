import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeContacts } from './liste-contacts';

@NgModule({
  declarations: [
    ListeContacts,
  ],
  imports: [
    IonicPageModule.forChild(ListeContacts),
  ],
  exports: [
    ListeContacts
  ]
})
export class ListeContactsModule {}
