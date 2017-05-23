import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { userInscription } from '../dataStructure/userInscription';

/*
  Generated class for the InscriptionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class InscriptionProvider {

  constructor(public http: Http) {

  }


  inscription(p_prenom: string, p_nom: string, p_mail: string, p_mdp: string): Observable<boolean> {

    let user = new userInscription();
    user.nom = p_nom;
    user.prenom = p_prenom;
    user.mail = p_mail;
    user.mdp = p_mdp;

    console.log(user.nom);

    let header = new Headers();
    header.append('Content-Type', 'application/json');

                                /*192.168.1.10*/
    return this.http.post('http://192.168.1.10/Al2cServer-war/webresources/utilisateur/inscription', user, header)
      .map(res => {
        // si le code http est 200 => ok
        if (res.status == 200)
          return true;
      },
      err => { return false; }
      );
  }




}
