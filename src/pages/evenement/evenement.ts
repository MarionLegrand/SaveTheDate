import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'; // besoin de ça pour récupèrer infos formulaires
//pages
import { ModalAjoutInvitation } from '../modal-ajout-invitation/modal-ajout-invitation';
import { Accueil } from '../accueil/accueil';
// DataStructure
import { EvenementData } from '../../dataStructure/evenement';
import { article } from '../../dataStructure/article';
//REST
import { EvenementProvider } from '../../providers/evenement-provider';
import { CreationEvenementModuleProvider } from '../../providers/creation-evenement-module-provider';

import { contactData } from '../../dataStructure/contactData';
import { messageInvitation } from '../../dataStructure/messageInvitation';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from "rxjs/Subscription";
// Pour les sms
import { SMS } from '@ionic-native/sms';

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
  providers: [EvenementProvider, CreationEvenementModuleProvider]
})
export class Evenement implements OnInit, OnDestroy {

  private event: EvenementData;
  private modifier: boolean;

  private presents: contactData[];
  private absents: contactData[];
  private sansReponses: contactData[];
  private messages: messageInvitation[];

  private liste: article[];

  private fg: FormGroup;

  private sub: ISubscription[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: EvenementProvider, private alertCtrl: AlertController, private fb: FormBuilder
    , private modal: ModalController, private smsVar: SMS, private providerListe: CreationEvenementModuleProvider) {
    this.modifier = true; // car disabled = true dans le template pour dire que c'est pas modifiable 

    this.absents = new Array<contactData>();
    this.presents = new Array<contactData>();
    this.sansReponses = new Array<contactData>();
    this.messages = new Array<messageInvitation>();

    this.liste = new Array<article>();

    // mise en place du form builder
    this.fg = fb.group({
      intitule: ['', Validators.required],
      description: ['', Validators.required],
      adresse: ['', Validators.required],
      complement: ['', Validators.required],
      ville: ['', Validators.required],
      cp: ['', Validators.compose([Validators.maxLength(5), Validators.minLength(5)])],
      message: ['', Validators.required],
      date: ['', Validators.required]
    })
    this.sub = new Array<ISubscription>();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Evenement');
  }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    console.log(this.sub);
    this.sub.forEach(element => {
      if (element != null)
        element.unsubscribe();
    });
  }

  /*
     On change le boolean permettant de modifer les champs du formulaire
  */
  activerModification() {
    this.modifier = false;
  }

  desactiverModification() {
    this.modifier = true;
    this.loadData();
  }

  ajouterInvitations() {
    let modal = this.modal.create(ModalAjoutInvitation, { id: this.navParams.get('paramId') });
    modal.onDidDismiss(() => {
      this.loadData();

      var i = this.provider.getListeAInviter(this.navParams.get('paramId')).subscribe(res => {
        this.messages = new Array<messageInvitation>();
        this.messages = res;
        for (var i = 0; i < this.messages.length; i++) {
          var message = this.messages[i];
          this.sendSMS(message.message, message.numero);
        }
      });
      this.sub.push(i); // on rajoute la subscription au tableau 
    })
    modal.present();
  }

  annulerInvitation(c: contactData) {
    var i = this.provider.annulerInvitation(this.navParams.get('paramId'), c).subscribe(
      res => { this.loadData(); }
    )
    this.sub.push(i); // on rajoute la subscription au tableau 
  }


  /*
    Todo passe évenement en A venir lorsque celui-ci est "en préparation"
  */
  passerEvenementEtatAVenir() {
    var s = this.event.dateDebut
    var dateNow = new Date().valueOf();

    if (Number(s) < dateNow) {
      this.showAlertErreurDateImpossible();
      return;
    }
    var x = this.provider.validerEvenement(this.navParams.get('paramId')).subscribe(() => {
      this.loadData();
      var j = this.provider.getListeAInviter(this.navParams.get('paramId')).subscribe(res => {
        this.messages = new Array<messageInvitation>();
        this.messages = res;
        for (var i = 0; i < this.messages.length; i++) {
          var message = this.messages[i];
          this.sendSMS(message.message, message.numero);
        }
      });
      this.sub.push(j);
    });
    this.sub.push(x);
  }

  sendSMS(message: string, numero: string) {
    var options = {
      replaceLineBreaks: true, // true to replace \n by a new line, false by default
      android: {
        intent: '' // Sends sms without opening default sms app
      }
    }
    this.smsVar.send(numero, message, options);
  }

  passerEvenementEtatAnnuler() {
    this.showAlertAnnulerEvenement();
  }

  validerModification() {
    let newEvent = this.event;

    newEvent.id = this.event.id;
    newEvent.intitule = this.fg.get('intitule').value;
    newEvent.description = this.fg.get('description').value;
    newEvent.adresse = this.fg.get('adresse').value;
    newEvent.codePostal = this.fg.get('cp').value;
    newEvent.complement = this.fg.get('complement').value;
    newEvent.message = this.fg.get('message').value;
    newEvent.ville = this.fg.get('ville').value;
    newEvent.nbPlaces = this.event.nbPlaces; // A voir 
    if (this.event.etat == 'EN_PREPARATION') {
      newEvent.dateDebut = this.fg.get('date').value;
    } else {
      newEvent.dateDebut = this.event.dateDebut;
    }

    // test sur la date 
    var s = this.fg.get('date').value;
    var date = new Date(Date.parse(s)).valueOf();
    var dateNow = new Date().valueOf();

    if (date < dateNow) {
      this.showAlertDate();
    } else {
      var i = this.provider.modifierEvenement(this.navParams.get('paramId'), newEvent).subscribe(() => {
        this.loadData();
      }, err => { /*alert('Erreur')*/ });

      this.sub.push(i);
    }
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

  loadData() {
    var i = this.provider.getDatasEvent(this.navParams.get('paramId')).subscribe(
      data => {
        this.event = null;
        this.absents = new Array<contactData>();
        this.presents = new Array<contactData>();
        this.sansReponses = new Array<contactData>();
        this.liste = new Array<article>();
        
        this.event = data[0];
        this.presents = data[1];
        this.absents = data[2];
        this.sansReponses = data[3];
        this.liste = data[4];
        this.setValuesForm();
      }
    )
    this.sub.push(i);
  }


  setValuesForm() {
    this.fg.get('intitule').setValue(this.event.intitule);
    this.fg.get('description').setValue(this.event.description);
    this.fg.get('adresse').setValue(this.event.adresse);
    this.fg.get('cp').setValue(this.event.codePostal);
    this.fg.get('complement').setValue(this.event.complement);
    this.fg.get('message').setValue(this.event.message);
    this.fg.get('ville').setValue(this.event.ville);
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


  showAlertAnnulerEvenement() {
    let alert = this.alertCtrl.create({
      title: 'Attention',
      subTitle: 'Annuler cet evenement enverra un message a vos invités, êtes vous sur de vouloir annuler ?',
      buttons: [{
        text: 'Oui',
        role: null,
        handler: () => {
          var i = this.provider.annulerEvenement(this.navParams.get('paramId')).subscribe(() => {
            // retour à l'accueil
            this.navCtrl.push(Accueil);

            return false;
          });
          this.sub.push(i);
        }
      }, {
        text: 'Non',
        role: 'cancel'
      }]
    });
    alert.present();
  }

}
