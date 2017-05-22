import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

//Datastructure 
import { EvenementData } from '../dataStructure/evenement';
import { contactData } from '../dataStructure/contactData';
/*
/*
  Generated class for the EvenementProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EvenementProvider {


  constructor(public http: Http) {
    console.log('Hello EvenementProvider Provider');
  }

  getEvenement(id: number): Observable<EvenementData> {
    return this.http.get('http://al2c.dtdns.net/Al2cServer-war/webresources/evenements/' + id + '/getEvenement?token=' + Number(localStorage.getItem('token')))
      .map(res => { return res.json() })
  }


  getListePresent(id: number): Observable<[contactData]> {
    return this.http.get('http://al2c.dtdns.net/Al2cServer-war/webresources/evenements/' + id + '/getListePresents?token=' + Number(localStorage.getItem('token')))
      .map(res => { return res.json() })
  }


  getListeAbsent(id: number): Observable<[contactData]> {
    return this.http.get('http://al2c.dtdns.net/Al2cServer-war/webresources/evenements/' + id + '/getListeNonPresents?token=' + Number(localStorage.getItem('token')))
      .map(res => { return res.json() })
  }


  getListeSansReponse(id: number): Observable<[contactData]> {
    return this.http.get('http://al2c.dtdns.net/Al2cServer-war/webresources/evenements/' + id + '/getListeSansReponse?token=' + Number(localStorage.getItem('token')))
      .map(res => { return res.json() })
  }


  getDatasEvent(id: number) {
    return Observable.forkJoin<EvenementData, [contactData], [contactData], [contactData]>(
      this.http.get('http://al2c.dtdns.net/Al2cServer-war/webresources/evenements/' + id + '/getEvenement?token=' + Number(localStorage.getItem('token')))
        .map(res => { return res.json() }),
      this.http.get('http://al2c.dtdns.net/Al2cServer-war/webresources/evenements/' + id + '/getListePresents?token=' + Number(localStorage.getItem('token')))
        .map(res => { return res.json() }),
      this.http.get('http://al2c.dtdns.net/Al2cServer-war/webresources/evenements/' + id + '/getListeNonPresents?token=' + Number(localStorage.getItem('token')))
        .map(res => { return res.json() }),
      this.http.get('http://al2c.dtdns.net/Al2cServer-war/webresources/evenements/' + id + '/getListeSansReponse?token=' + Number(localStorage.getItem('token')))
        .map(res => { return res.json() })
    )
  }

  validerEvenement(id: number): Observable<void> {
    return this.http.put('http://al2c.dtdns.net/Al2cServer-war/webresources/evenements/' + id + '/validerEvenement?token=' + Number(localStorage.getItem('token')), null)
      .map(() => { })
  }

  annulerEvenement(id: number): Observable<void> {
    return this.http.get('http://al2c.dtdns.net/Al2cServer-war/webresources/evenements/' + id + '/annulerEvenement?token=' + Number(localStorage.getItem('token')))
      .map(() => { })
  }


  modifierEvenement(id: number, event: EvenementData): Observable<void> {
    return this.http.put('http://al2c.dtdns.net/Al2cServer-war/webresources/evenements/' + id + '/modifierEvenement?token=' + Number(localStorage.getItem('token')), event)
      .map(() => { })
  }

  annulerInvitation(id: number, removeContacts: contactData) : Observable<void> {
    let arr = new Array<contactData>();
    arr.push(removeContacts);

    let header = new Headers();
    header.append('Content-Type', 'application/json');
   return this.http.post('http://al2c.dtdns.net/Al2cServer-war/webresources/evenements/' + id + '/supprimerInvitationContacts?token=' + Number(localStorage.getItem('token')), arr, header)
      .map(() => { return }, err => alert('erreur'))
  }

}