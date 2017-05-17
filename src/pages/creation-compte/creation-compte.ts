import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'; // besoin de ça pour récupèrer infos formulaires
// Page de redirection 
import { HomePage } from '../home/home';
import { Accueil } from '../accueil/accueil';
// providers
import { InscriptionProvider } from '../../providers/inscription-provider'

@IonicPage()
@Component({
  selector: 'page-creation-compte',
  templateUrl: 'creation-compte.html',
  providers: [InscriptionProvider]
})
export class CreationCompte {

  private fg: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public provider: InscriptionProvider, private fb: FormBuilder, public alertCtrl: AlertController) {
    this.fg = fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      mail: ['', Validators.email],
      password: ['', Validators.required],
      passwordBis: ['', Validators.required]
    })
  }

  // Redirection sur la page de connexion à l'abandon d'une création de compte 
  annuler() {
    this.navCtrl.push(HomePage);
  }

  // Redirection page de connexion après validation de la création d'un compte 
  validerCreationCompte() {

    // on checke que les mots de passes sont les mêmes d'abord 
    if (this.fg.get('password').value != this.fg.get('passwordBis').value) {
      // si pas bon on montre une alert avec l'erreur correspondante 
      this.showAlertErreurMdpDifferent();
      return; // on sort de la fonction pas la peine de continuer mauvaise saisi
    }

    // on envoie les informations au provider
    this.provider.inscription(this.fg.get('prenom').value,this.fg.get('nom').value, this.fg.get('mail').value,
    this.fg.get('password').value).subscribe( res => {
    
    // si c'est ok alert succes et retour home
      if(res == true){
        this.showAlertSuccessCreationCompte();
        this.navCtrl.push(HomePage);
      }
    },
     err => {   // sinon alert avec erreur 
        this.showAlertErreurCreationCompte();
      })
    };

  showAlertErreurMdpDifferent() {
    let alert = this.alertCtrl.create({
      title: 'Erreur !',
      subTitle: 'Les mots de passes saisies sont différents',
      buttons: ['OK']
    });
    alert.present();
  }



  showAlertErreurCreationCompte() {
    let alert = this.alertCtrl.create({
      title: 'Erreur pour la création du compte!',
      subTitle: 'Votre mail existe déjà chez nous !',
      buttons: ['OK']
    });
    alert.present();
  }



  showAlertSuccessCreationCompte() {
    let alert = this.alertCtrl.create({
      title: 'Bienvenue !',
      subTitle: 'Bienvenue et merci ! ',
      buttons: ['OK']
    });
    alert.present();
  }

}
