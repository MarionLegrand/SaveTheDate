import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

//Datastructure 
import { Tag } from '../dataStructure/tag';
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


  getEvenement(id:number){
    return this.http.get('evenements/{idEvenement}?token=4568ddzda')
  }



}
