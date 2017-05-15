import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

// DataStructure 
import { contactData } from '../dataStructure/contactData';
import { canal } from '../dataStructure/canal';
import { Tag } from '../dataStructure/tag';

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ContactProvider {

  constructor(public http: Http) {
    console.log('Hello ContactProvider Provider');
  }

  /*
  renvoi les information relative à un contact de l'utilisateur via son id 
*/
  getContact(id: number): Observable<contactData> {
    let ct = new contactData();

    return this.http.get('http://al2c.dtdns.net/Al2cServer-war/webresources/contacts/' + id + '/getContact?token=' + Number(localStorage.getItem('token')))
      .map(res => { 
        ct.id = res.json().id;
        ct.nom = res.json().nom;
        ct.prenom = res.json().prenom;  
        ct.canaux = res.json().canaux;      
        return ct;
      })
  }

  /*
   A VOIR cette fonction renvoie les tags relatifs à un contacts 
      cependant à réléfchir de la couplé directement dans getContact afin d'avoir toutes les 
     informations d'un seul coup ? 
  */
  getContactTags(id: number): Observable<[Tag]> {
    return this.http.get('http://al2c.dtdns.net/Al2cServer-war/webresources/tags/' + id + '/getListTagsByContact?token=' + Number(localStorage.getItem('token')))
      .map(res => { return res.json() })
  }


  modifierContact() {

  }


}
