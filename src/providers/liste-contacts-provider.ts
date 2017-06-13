import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

// datastructure
import {contactData} from '../dataStructure/contactData';
//import { canal } from '../dataStructure/canal';

/*
  Generated class for the ListeContactsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ListeContactsProvider {

  constructor(public http: Http) {
    console.log('Hello ListeContactsProvider Provider');
  }

/*
  renvoi la liste des contacts de cet utilisateur dans un tableau de type contactData
*/
getUserContacts() : Observable<contactData[]>{
  return this.http.get('http://www.al2c.savethedate-al2c.fr/Al2cServer-war/webresources/contacts/getContactsList?token=' + Number(localStorage.getItem('token')))
  .map( res => {return res.json()})
}



}
