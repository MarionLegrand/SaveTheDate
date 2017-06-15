import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { userAccueil } from '../dataStructure/userAccueil';
import { EventAbstract } from '../dataStructure/eventList';
/*
  Generated class for the AccueilProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AccueilProvider {

  constructor(public http: Http) {

  }

  /**
   * Retourne les data des l'utilisateur courant 
   */
  getUserData(): Observable<userAccueil> {
    return this.http.get('http://2.6.10.86/Al2cServer-war/webresources/utilisateur/afficherParametres?token=' + Number(localStorage.getItem('token')))
      .map(res => {
        let user = new userAccueil();
        user.nom = res.json().nom;
        user.prenom = res.json().prenom;
        user.mail = res.json().mail;

        return user;
      }, err => console.log(err)
      );
  }

  /**
   * Retourne les évenements à venir ou une erreur 
   * Prends en paramètres le token de l'utilisateur courant
   */
  getEventsAVenirData(): Observable<[EventAbstract]> {
    return this.http.get('http://2.6.10.86/Al2cServer-war/webresources/evenements/getListeEvenementsA_Venir?token=' + Number(localStorage.getItem('token')))
      .map(res => { return res.json(); }
      , err => console.log(err)
      )
  }

  getListeEvenementEnPreparation() {
    return this.http.get('http://2.6.10.86/Al2cServer-war/webresources/evenements/getListeEvenementsEnPreparation?token=' + Number(localStorage.getItem('token')))
      .map(res => { return res.json(); }
      , err => console.log(err)
      )
  }

  getDatasEvent() {
    return Observable.forkJoin<[EventAbstract], [EventAbstract]>(
      this.http.get('http://2.6.10.86/Al2cServer-war/webresources/evenements/getListeEvenementsAVenir?token=' + Number(localStorage.getItem('token')))
        .map(res => { return res.json(); }
        , err => console.log(err)),
      this.http.get('http://2.6.10.86/Al2cServer-war/webresources/evenements/getListeEvenementsEnPreparation?token=' + Number(localStorage.getItem('token')))
        .map(res => { return res.json(); }
        , err => console.log(err))
    )
  }


}
