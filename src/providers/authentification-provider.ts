import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the AuthentificationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthentificationProvider {

  constructor(public http: Http) {
  }

  /**
   * Authentifie un utilisateur et renvoi son token si les datas sont en bdd
   */
  login(mail: string, mdp: string): Observable<number> {
    /*Hary-Marion remplacer www.al2c.savethedate-al2c.fr par www.al2c.savethedate-al2c.fr*/
    return this.http.get('http://www.al2c.savethedate-al2c.fr/Al2cServer-war/webresources/utilisateur/authentification?mail=' + mail + '&mdp=' + mdp)
      .map(res => res.json().token
      , err => console.error(err))
  }

  /**
   * Retourne si l'utilisateur à des contacts en base de données.
   * True si il en a, false sinon 
   */
  synchroniserContacts(): Observable<boolean> {

    return this.http.get('http://www.al2c.savethedate-al2c.fr/Al2cServer-war/webresources/utilisateur/synchroniserContacts?token=' + Number(localStorage.getItem('token')))
      .map(res => {
        console.log(res.json().statut);
        return res.json().statut;
      }
      , err => { return false;})
  }




}
