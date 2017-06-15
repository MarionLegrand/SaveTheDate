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

  public addListe(articles: article[], id: number): Observable<any> {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://al2c.savethedate-al2c.fr/Al2cServer-war/webresources/evenements/' + id + '/creerListeArticle?token=' + Number(localStorage.getItem('token')), articles, header)
      .map(res => { })
  }

  public getListeEvent(id: number): Observable<[article]> {
    return this.http.get('http://al2c.savethedate-al2c.fr/Al2cServer-war/webresources/evenements/' + id + '/getListeArticles?token=' + Number(localStorage.getItem('token')))
      .map(res => { return res.json() }
      , err => { return new Array<article>() }
      )
  }

}
