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

/*
  Renvoi la liste des tags de l'utilisateur courant 
*/
  afficherListeTags() : Observable<Tag[]> {

     return this.http.get('http://192.168.1.25/Al2cServer-war/webresources/tags/creerTag?token='+localStorage.getItem('token'))
      .map(res => {
        // si le code http est 200 => ok
        if (res.status == 200)
          return res.json();
      },
      err => { return false; }
      );
  }

  /**
   * Ajout d'un tag 
   */
  addTag(tag:Tag): Observable<boolean> {

    let header = new Headers();
    header.append('Content-Type', 'application/json');

    /*al2c.dtdns.net*/
    return this.http.post('http://192.168.1.25/Al2cServer-war/webresources/tags/creerTag?token='+localStorage.getItem('token'), 
    tag, header)
      .map(res => {
        // si le code http est 200 => ok
        if (res.status == 200)
          return true;
      },
      err => { return false; }
      );
  }

/*
  Modifier un tag
  /!\ le tag doit avoir un id donc construit entièrement  
*/
updateTag(tag:Tag) : Observable<boolean> {

    let header = new Headers();
    header.append('Content-Type', 'application/json');

    /*al2c.dtdns.net*/
    return this.http.put('http://192.168.1.25/Al2cServer-war/webresources/tags/'+tag.id+'/modifierTag?token='+localStorage.getItem('token'), 
    tag, header)
      .map(res => {
        // si le code http est 200 => ok
        if (res.status == 200)
          return true;
      },
      err => { return false; }
      );
  }

/*
 Affecte un tag au contact dont l'id est passé en paramètre 
*/
affecterTag(idContact:number, tag:Tag): Observable<boolean> {

  let header = new Headers();
    header.append('Content-Type', 'application/json');

    /*al2c.dtdns.net*/
    return this.http.post('http://192.168.1.25/Al2cServer-war/webresources/tags/'+tag.id+'/'+idContact+'/affecterTag?token='+localStorage.getItem('token'), 
    tag, header)
      .map(res => {
        // si le code http est 200 => ok
        if (res.status == 200)
          return true;
      },
      err => { return false; }
      );
  }

/*
  Desafecte le contact dont l'id est passé en paramètre du tag 
*/
desaffecterTag(idContact:number, tag:Tag): Observable<boolean> {

  let header = new Headers();
    header.append('Content-Type', 'application/json');

    /*al2c.dtdns.net*/
    return this.http.get('http://192.168.1.25/Al2cServer-war/webresources/tags/'+tag.id+'/'+idContact+'/desaffecterTag?token='+localStorage.getItem('token'))
      .map(res => {
        // si le code http est 200 => ok
        if (res.status == 200)
          return true;
      },
      err => { return false; }
      );
  }

}
