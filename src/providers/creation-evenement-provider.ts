import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

// DataStructure 
import { EvenementData } from '../dataStructure/evenement';

/*
  Generated class for the CreationEvenementProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CreationEvenementProvider {

  constructor(public http: Http) {
    console.log('Hello CreationEvenementProvider Provider');
  }

  creerEvenement(event: EvenementData): Observable<any> {
    let header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http.post('http://192.168.1.10/Al2cServer-war/webresources/evenements/creerEvenement?token=' + Number(localStorage.getItem('token')), event, header)
      .map(
        res => {
          console.log(res.json().id)
        return res.json().id;
      }, 
      err => { return false; })
  }



}
