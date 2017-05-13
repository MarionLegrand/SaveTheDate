import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

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




}
