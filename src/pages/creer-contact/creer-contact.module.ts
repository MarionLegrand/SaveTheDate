import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreerContact } from './creer-contact';

@NgModule({
  declarations: [
    CreerContact,
  ],
  imports: [
    IonicPageModule.forChild(CreerContact),
  ],
  exports: [
    CreerContact
  ]
})
export class CreerContactModule {}
