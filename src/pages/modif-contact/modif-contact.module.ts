import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifContact } from './modif-contact';

@NgModule({
  declarations: [
    ModifContact,
  ],
  imports: [
    IonicPageModule.forChild(ModifContact),
  ],
  exports: [
    ModifContact
  ]
})
export class ModifContactModule {}
