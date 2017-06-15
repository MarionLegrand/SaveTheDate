import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { Tag } from '../dataStructure/tag';
/*
  Generated class for the GroupeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GroupeProvider {

  constructor(public http: Http) {
    console.log('Hello GroupeProvider Provider');
  }

    getTags(): Observable<[Tag]> {
    return this.http.get('http://2.6.10.86/Al2cServer-war/webresources/tags/afficherTags?token=' + Number(localStorage.getItem('token')))
      .map(res => { return res.json() })
  }

 creerTag(tag: Tag): Observable<any> {

    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://2.6.10.86/Al2cServer-war/webresources/tags/creerTag?token=' + Number(localStorage.getItem('token')), tag,header)
      .map(res => res)
  }
  
}
