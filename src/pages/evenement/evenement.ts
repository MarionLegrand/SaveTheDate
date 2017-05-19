import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

// DataStructure
import { EvenementData } from '../../dataStructure/evenement';
//REST
import { EvenementProvider } from '../../providers/evenement-provider';


/**
 * Generated class for the Evenement page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-evenement',
  templateUrl: 'evenement.html',
  providers: [EvenementProvider]
})
export class Evenement implements OnInit {

  private event: EvenementData;
  private modifier: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: EvenementProvider, private alertCtrl: AlertController) {
    this.modifier = true; // car disabled = true dans le template pour dire que c'est pas modifiable 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Evenement');
  }

  ngOnInit() {
    this.loadData();
  }

  /*
     On change le boolean permettant de modifer les champs du formulaire
  */
  activerModification() {
    this.modifier = false;
  }

  desactiverModification() {
    this.modifier = true;
    this.event = null;
    this.loadData();
  }

  /*
    Todo passe évenement en A venir lorsque celui-ci est "en préparation"
  */
  passerEvenementEtatAVenir() {


      var s = this.event.dateDebut;
      
      var dateNow = new Date().valueOf();


    if (Number(s) < dateNow) {
      this.showAlertErreurDateImpossible();
      console.log('okok');
      return;
    }
    console.log('!okok');
    // ici mettre provider 

  }

  loadData() {
    this.provider.getEvenement(this.navParams.get('paramId')).subscribe(res => {
      this.event = res; console
        .log(this.event)
    });
  }

  /*
    cas ou la date de l'evenement en préparation est antérieure au jour j
  */
  showAlertErreurDateImpossible() {
    let alert = this.alertCtrl.create({
      title: 'Erreur la date est passée pour valider cette évenement',
      subTitle: 'Veuillez modifier la date afin de valider cet évenement !',
      buttons: ['OK']
    });
    alert.present();
  }



}
