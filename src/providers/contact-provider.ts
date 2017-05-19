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

    return this.http.get('http://192.168.1.10/Al2cServer-war/webresources/contacts/' + id + '/getContact?token=' + Number(localStorage.getItem('token')))
      .map(res => {
        ct.id = res.json().id;
        ct.nom = res.json().nom;
        ct.prenom = res.json().prenom;
        ct.canaux =  res.json().canaux;
        return ct;
      })
  }


  getContactTags(id: number): Observable<[Tag]> {
    return this.http.get('http://192.168.1.10/Al2cServer-war/webresources/tags/' + id + '/getListTagsByContact?token=' + Number(localStorage.getItem('token')))
      .map(res => { return res.json() })
  }


  getCanalsContact(id: number) : Observable<[canal]>{
    return this.http.get('http://192.168.1.10/Al2cServer-war/webresources/contact/' + id + '/getCanaux?token=' + Number(localStorage.getItem('token')))
      .map(res => { return res.json() })
  }

desaffecterTagUser(idTag: number, idContact: number) : Observable<any>{
    return this.http.get('http://192.168.1.10/Al2cServer-war/webresources/tags/' + idTag + '/' + idContact + '/desaffecterTag?token=' + Number(localStorage.getItem('token')))
      .map(res => { console.log(res) });
  }
}
