import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

//Datastructure 
import { EvenementData } from '../dataStructure/evenement';
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


  getEvenement(id:number) : Observable<EvenementData>{
    return this.http.get('http://192.168.1.10/Al2cServer-war/webresources/evenements/'+id+'/getEvenement?token='+ Number(localStorage.getItem('token')))
    .map( res => {return res.json() })
  }



}
