import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { userAccueil } from '../dataStructure/userAccueil';
/*
  Generated class for the AccueilProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AccueilProvider {

  constructor(public http: Http) {
    
  }


getUserData(id:number) : Observable<userAccueil>{
    return this.http.get('http://192.168.1.25/Al2cServer-war/webresources/utilisateur/afficherParametres?token='+id)
    .map( res => {
      let user= new userAccueil();
     user.nom = res.json().nom;
     user.prenom =  res.json().prenom;
     user.mail =  res.json().mail;

     return user;
    }, err => console.log(err)
    );
}

getEventsData(id:number)/*observable eve,nt*/{

}


}
