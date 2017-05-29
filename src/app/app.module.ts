import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
// Pages de l'application 
import { Accueil } from '../pages/accueil/accueil';
import { Contact } from '../pages/contact/contact';
import { CreationCompte } from '../pages/creation-compte/creation-compte';
import { Evenement } from '../pages/evenement/evenement';
import { Groupe } from '../pages/groupe/groupe';
import { HomePage } from '../pages/home/home';
import { ListeContacts } from '../pages/liste-contacts/liste-contacts';
import { ListeEvenements } from '../pages/liste-evenements/liste-evenements';
import { MenuDeroulant1 } from '../pages/menu-deroulant1/menu-deroulant1';
import { ModifGroupe } from '../pages/modif-groupe/modif-groupe';
import { Parametrage } from '../pages/parametrage/parametrage';
import { SynchroContact } from '../pages/synchro-contact/synchro-contact';
import { ModalContactAjoutTags } from '../pages/modal-contact-ajout-tags/modal-contact-ajout-tags';
import { ModalAjoutInvitation } from '../pages/modal-ajout-invitation/modal-ajout-invitation';
// création d'èvenement
import { CreationEvenement } from '../pages/creation-evenement-total/creation-evenement/creation-evenement';
import { CreationEvenementModule } from '../pages/creation-evenement-total/creation-evenement-module/creation-evenement-module';
import { CreationEvenementInvitation } from '../pages/creation-evenement-total/creation-evenement-invitation/creation-evenement-invitation';
// Ajout contact
import {CreerContact } from '../pages/creer-contact/creer-contact';
// Pour l'envoie de sms
import { SMS } from '@ionic-native/sms';

@NgModule({
  declarations: [
    MyApp,
    // Pages de l'application
    Accueil,
    Contact,
    CreationCompte,
    Evenement,
    Groupe,
    HomePage,
    ListeContacts,
    ListeEvenements,
    MenuDeroulant1,
    ModifGroupe,
    Parametrage,
    SynchroContact,
    ModalContactAjoutTags,
    CreationEvenement,
    CreationEvenementModule,
    CreationEvenementInvitation,
    ModalAjoutInvitation,
    CreerContact
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // Pages de l'application
    Accueil,
    Contact,
    CreationCompte,
    Evenement,
    Groupe,
    HomePage,
    ListeContacts,
    ListeEvenements,
    MenuDeroulant1,
    ModifGroupe,
    Parametrage,
    SynchroContact,
    ModalContactAjoutTags,
    CreationEvenement,
    CreationEvenementModule,
    CreationEvenementInvitation,
    ModalAjoutInvitation,
    CreerContact
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
