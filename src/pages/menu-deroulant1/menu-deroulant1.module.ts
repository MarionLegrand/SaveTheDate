import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuDeroulant1 } from './menu-deroulant1';

@NgModule({
  declarations: [
    MenuDeroulant1,
  ],
  imports: [
    IonicPageModule.forChild(MenuDeroulant1),
  ],
  exports: [
    MenuDeroulant1
  ]
})
export class MenuDeroulant1Module {}
