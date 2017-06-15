import { Component, OnDestroy } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'; // besoin de ça pour récupèrer infos formulaires
// Page de redirection 
import { Accueil } from '../accueil/accueil';
import { CreationCompte } from '../creation-compte/creation-compte';
// REST 
import { AuthentificationProvider } from '../../providers/authentification-provider';
import { ISubscription } from "rxjs/Subscription";
import { SynchroContact } from '../synchro-contact/synchro-contact'; // page affiché quand l'utilisateur n'a pas de contact => première connexion 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AuthentificationProvider]
})
export class HomePage implements OnDestroy {

  private monFormGroup: FormGroup;
  private num: number;
  private subs: ISubscription[];

  constructor(public navCtrl: NavController, private fb: FormBuilder,
    private provider: AuthentificationProvider, public alertCtrl: AlertController) {

    this.monFormGroup = this.fb.group({
      mail: ['', Validators.email],
      password: ['', Validators.required]
    });

    this.num = 0;
    this.subs = new Array<ISubscription>();
  }

  ngOnDestroy() {
    this.subs.forEach(elem => {
      if (elem != null)
        elem.unsubscribe();
    })
  }

  // Redirection sur la page d'acceuil après connexion 
  connexion() {
    console.log(this.num);

    var x = this.provider.login(this.monFormGroup.get('mail').value, this.monFormGroup.get('password').value)
      .subscribe(res => { // entre ces accolades c'est le cas optimal ou tout fonctionne

        /*En gros les requêtes sont asynchrones vers le serveur donc quand on se place ici
        les instruction ci-dessous seront effectués après que l'on ai reçu la totalité 
        des réponses du serveur
        
        la méthode subscribe se décompose en 3 parties
        celle dans laquelle on se trouve c'est le cas ou tout fonctionne le code est executé après
        la reception des données du serveur 
        */
        console.log(res);

        if ((res != 0) && (res != undefined)) {
          localStorage.setItem('token', res.toString()); // on set une variable sessions avec le token 

          // cas de la première connection ou 'utilisateur n'a pas de contacts en bdd
          // on le redirige vers la page de synchronisation 
          var y = this.provider.synchroniserContacts().subscribe(
            res => {
              if (res == true)
                this.navCtrl.push(SynchroContact);
              else
                this.navCtrl.setRoot(Accueil)
            }, // retour true il y a des contact
            res => { alert(res) } // err pas de contact => go synchro        
          )
          this.subs.push(y);
        }

      }, err => {
        /*
        la seconde partie ICI? C'est qunand on a des erreurs http 
        c'est un peu comme un try catch finally en java en fait 
        la 3eme partie n'est pratiqueme,nt jamais utilisé c'est complet donc j'en parlerai pas 
        */
        this.showAlertErreurAuthentification();
      })
    this.subs.push(x);
  }

  // Redirection sur la page de création d'une page 
  creerCompte() {
    console.log("okok");
    this.navCtrl.push(CreationCompte);
  }


  showAlertErreurAuthentification() {
    let alert = this.alertCtrl.create({
      title: 'Erreur !',
      subTitle: 'Mauvais mail ou mauvais mot de passe',
      buttons: ['OK']
    });
    alert.present();
  }
}

