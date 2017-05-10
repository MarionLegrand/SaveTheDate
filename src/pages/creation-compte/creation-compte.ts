import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Page de redirection 
import { HomePage } from '../home/home';
import { Accueil } from '../accueil/accueil';

@IonicPage()
@Component({
  selector: 'page-creation-compte',
  templateUrl: 'creation-compte.html',
})
export class CreationCompte {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // Redirection sur la page de connexion à l'abandon d'une création de compte 
  annuler(){
    this.navCtrl.push(HomePage);
  }

  // Redirection page de connexion après validation de la création d'un compte 
  validerCreationCompte(){
    this.navCtrl.push(Accueil);
  }

}
