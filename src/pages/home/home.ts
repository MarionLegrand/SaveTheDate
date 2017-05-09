import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Test } from '../test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  // Redirection sur la page d'acceuil après connexion 
  connexion(){
    this.navCtrl.push(Test);
  }


}
