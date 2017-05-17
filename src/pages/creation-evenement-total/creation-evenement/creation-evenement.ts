import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
// pages
import { CreationEvenementModule } from '../creation-evenement-module/creation-evenement-module';
// REST 
import { CreationEvenementProvider } from '../../../providers/creation-evenement-provider';

// DataStrucutre 


/**
 * Generated class for the CreationEvenement page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-creation-evenement',
  templateUrl: 'creation-evenement.html',
  providers: [CreationEvenementProvider]
})
export class CreationEvenement {

  private fg: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder
    , private provider: CreationEvenementProvider, public alertCtrl: AlertController) {
    this.fg = fb.group({
      intitule: ['', Validators.required],
      description: ['', Validators.required],
      adresse: ['', Validators.required],
      complement: ['', Validators.required],
      ville: ['', Validators.required],
      cp: ['', Validators.maxLength(5)], // TODO géré minimun 5 cracatères code postal 
      date: ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreationEvenement');
  }


  valider() {
    var s = this.fg.get('date').value;
    var date =  new Date(Date.parse(s)).valueOf();
    var dateNow = new Date().valueOf();
    console.log(date+" "+dateNow);
    if (date < dateNow) {  
      console.log(date+" okok "+dateNow);
      this.showAlertDate();
    } else {
      // on envoi au provider qui créer l'événement 
      //this.provider ... 

      // on envoi sur la vue suivante creationEvenementModule
      this.navCtrl.setRoot(CreationEvenementModule);
    }
  }

  annuler(){
    this.navCtrl.pop();
  }


  /*
    Montre une alerte lorsque la date est inférieure ou égale à celle du jours
  */
  showAlertDate() {

    let alert = this.alertCtrl.create({
      title: 'Erreur !',
      subTitle: 'La date doit être dans le futur ! ',
      buttons: ['OK']
    });
    alert.present();

  }


}
