import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
// pages
import { CreationEvenementModule } from '../creation-evenement-module/creation-evenement-module';
// REST 
import { CreationEvenementProvider } from '../../../providers/creation-evenement-provider';
import { ISubscription } from "rxjs/Subscription";
// DataStrucutre 
import { EvenementData } from '../../../dataStructure/evenement';

/**
 * Generated class for the CreationEvenement page.
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-creation-evenement',
  templateUrl: 'creation-evenement.html',
  providers: [CreationEvenementProvider]
})
export class CreationEvenement implements OnDestroy {

  private fg: FormGroup;
  private idEvent: number;
  private subs: ISubscription[];

  // Variable de subscription
  private subscription: ISubscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder
    , private provider: CreationEvenementProvider, public alertCtrl: AlertController) {
    this.fg = fb.group({
      intitule: ['', Validators.required],
      description: ['', Validators.required],
      adresse: ['', Validators.required],
      complement: [''],
      ville: ['', Validators.required],
      cp: ['', Validators.compose([Validators.maxLength(5), Validators.minLength(5)])], // TODO géré minimun 5 cracatères code postal 
      date: [new Date().toISOString(), Validators.required],
      nombrePlace: ['', Validators.required]
    })
    this.subs = new Array<ISubscription>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreationEvenement');
  }

  ngOnDestroy() {
    this.subs.forEach(elem => {
      if (elem != null)
        elem.unsubscribe();
    })
  }

  valider() {
    var s = this.fg.get('date').value;
    var date = new Date(Date.parse(s)).valueOf();
    var dateNow = new Date().valueOf();
    console.log(date);
    if (date < dateNow) {
      console.log(date + " okok " + dateNow);
      this.showAlertDate();
    } else {
      let event = new EvenementData();
      var dateEnvoi = new Date(Date.parse(this.fg.get('date').value)).valueOf();

      event.intitule = this.fg.get('intitule').value;
      event.dateDebut = dateEnvoi.toString();
      event.description = this.fg.get('description').value;
      event.nbPlaces = Number(this.fg.get('nombrePlace').value);

      if (this.fg.get('complement').value != '')
        event.complement = this.fg.get('complement').value;
      else
        event.complement = " ";

      event.ville = this.fg.get('ville').value;
      event.codePostal = this.fg.get('cp').value;
      event.adresse = this.fg.get('adresse').value;

      // on envoi au provider qui créer l'événement 
      var x = this.provider.creerEvenement(event).subscribe(
        res => { this.idEvent = res, this.navCtrl.setRoot(CreationEvenementModule, { id: this.idEvent }); },
        err => {
          alert("erreur ! ");
          return;
        }
      )
      this.subs.push(x);
    }
  }

  annuler() {
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
