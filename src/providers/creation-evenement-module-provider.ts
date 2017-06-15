import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
// datatructure
import { article } from '../dataStructure/article';

/*
  Generated class for the CreationEvenementModuleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CreationEvenementModuleProvider {

  constructor(public http: Http) {
    console.log('Hello CreationEvenementModuleProvider Provider');
  }

  private addListe( articles:article[]){

  }

  private getListeEvent(id:number) : Observable<[article]>{
    return null;
  }

}
