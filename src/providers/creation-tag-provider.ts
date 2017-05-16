import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Tag } from '../dataStructure/tag';
/*
  Generated class for the CreationTagProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CreationTagProvider {

  constructor(public http: Http) {
    console.log('Hello CreationTagProvider Provider');
  }

  creerTag(tag: Tag): Observable<any> {

    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://al2c.dtdns.net/Al2cServer-war/webresources/tags/creerTag?token=' + Number(localStorage.getItem('token')), tag,header)
      .map(res => res)
  }

}
