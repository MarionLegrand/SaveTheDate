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
    /*Hary-Marion remplacer 192.168.1.25 par al2c.dtdns.net*/
    return this.http.get('http://192.168.1.25/Al2cServer-war/webresources/utilisateur/authentification?mail=' + mail + '&mdp=' + mdp)
      .map(res => res.json().token
      , err => console.error(err))
  }

  /**
   * Retourne si l'utilisateur à des contacts en base de données.
   * True si il en a, false sinon 
   */
  hasContacts(): Observable<boolean> {

    return this.http.get('http://192.168.1.25/Al2cServer-war/webresources/contacts/getContactsList?token=' + Number(localStorage.getItem('token')))
      .map(res => {
        if (res.status != 404)
          return true;

        return false;

      }
      , err => { return false;})
  }




}
