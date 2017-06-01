import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

// dataStructure
import { canal } from '../dataStructure/canal';
import { contactData } from '../dataStructure/contactData';
/*
  Generated class for the SynchroContactProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SynchroContactProvider {

  constructor(public http: Http) {
  }

  /*
   Todo a voir si on envoi un array ou une boucle contact par contact 
  */
  sendContactsDataToserver(tab: contactData[]): Observable<boolean> {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://www.savethedate-al2c.fr/Al2cServer-war/webresources/contacts/creerContacts?token=' + Number(localStorage.getItem('token')), tab, header)
      .map(res => { alert("Vos contacts sont maintenant enregistrés"); return true;},
      res => {alert(res); return false;});
  }


}
