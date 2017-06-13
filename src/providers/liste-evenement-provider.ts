import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

// data Structure
import { EventAbstract } from '../dataStructure/eventList';
/*
  Generated class for the ListeEvenementProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ListeEvenementProvider {

  constructor(public http: Http) {
    console.log('Hello ListeEvenementProvider Provider');
  }

/*
  Renvoi la liste des événements passées ou annulés 
*/
getListeEvenementPasser() : Observable<[EventAbstract]>{
   return this.http.get('http://www.al2c.savethedate-al2c.fr/Al2cServer-war/webresources/evenements/getListeEvenements?token=' + Number(localStorage.getItem('token')))
      .map( res => { return res.json();}
      , err => console.log(err)
      )
}

}
