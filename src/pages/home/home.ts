import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// Page de redirection 
import { Accueil } from '../accueil/accueil';
import { CreationCompte } from '../creation-compte/creation-compte';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  // Redirection sur la page d'acceuil après connexion 
  connexion(){
    this.navCtrl.push(Accueil);
  }

  // Redirection sur la page de création d'une page 
  creerCompte(){
    this.navCtrl.push(CreationCompte);
  }


}
