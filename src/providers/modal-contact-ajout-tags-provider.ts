import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

// dataStructure
import { Tag } from '../dataStructure/tag';

/*
  Generated class for the ModalContactAjoutTagsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ModalContactAjoutTagsProvider {

  constructor(public http: Http) {
    console.log('Hello ModalContactAjoutTagsProvider Provider');
  }


  getAllUserTags(): Observable<[Tag]> {
    return this.http.get('http://192.168.1.10/Al2cServer-war/webresources/tags/afficherTags?token=' + Number(localStorage.getItem('token')))
      .map(res => { return res.json() })
  }

  affecterTagUser(idTag:number, idContact:number) : Observable<any>{
    return this.http.post('http://192.168.1.10/Al2cServer-war/webresources/tags/'+idTag+'/'+idContact+'/affecterTag?token=' + Number(localStorage.getItem('token')),null)
    .map( res => {console.log(res)});
  }

  


}
