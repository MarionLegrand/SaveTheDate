import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

// DataStructure 
import { contactData } from '../dataStructure/contactData';
/*
  Generated class for the CreerContactProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CreerContactProvider {

  constructor(public http: Http) {
    console.log('Hello CreerContactProvider Provider');
  }

  creerContact(contact: contactData): Observable<void> {
    let tab = new Array<contactData>();
    tab.push(contact);
    return this.http.post('http://www.al2c.savethedate-al2c.fr/Al2cServer-war/webresources/contacts/creerContacts?token=' + Number(localStorage.getItem('token')), tab)
      .map(() => { })
  }


}
