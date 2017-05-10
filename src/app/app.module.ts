import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
// Pages de l'application 
import { Accueil } from '../pages/accueil/accueil';
import { Contact } from '../pages/contact/contact';
import { CreationCompte } from '../pages/creation-compte/creation-compte';
import { Evenement } from '../pages/evenement/evenement';
import { Groupe } from '../pages/groupe/groupe';
import { HomePage } from '../pages/home/home';
import { ListeContacts } from '../pages/liste-contacts/liste-contacts';
import { ListeEvenements } from '../pages/liste-evenements/liste-evenements';
import { ListeGroupes } from '../pages/liste-groupes/liste-groupes';
import { MenuDeroulant1 } from '../pages/menu-deroulant1/menu-deroulant1';
import { ModifContact } from '../pages/modif-contact/modif-contact';
import { ModifEvenement } from '../pages/modif-evenement/modif-evenement';
import { ModifGroupe } from '../pages/modif-groupe/modif-groupe';
import { Parametrage } from '../pages/parametrage/parametrage';

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
    ListeGroupes,
    MenuDeroulant1,
    ModifContact,
    ModifEvenement,
    ModifGroupe,
    Parametrage
  ],
  imports: [
    BrowserModule,
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
    ListeGroupes,
    MenuDeroulant1,
    ModifContact,
    ModifEvenement,
    ModifGroupe,
    Parametrage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
