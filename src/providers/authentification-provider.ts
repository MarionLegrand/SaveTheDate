import { Injectable , OnInit} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the AuthentificationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthentificationProvider {

  constructor(public http: Http)  {
  }

login(mail:string, mdp:string) : Observable<number> {
                        /*Hary-Marion remplacer 192.168.1.25 par al2c.dtdns.net*/
 return this.http.get('http://al2c.dtdns.net/Al2cServer-war/webresources/utilisateur/authentification?mail='+mail+'&mdp='+mdp)
  .map(res=> res.json().token
  , err => console.error(err))
}


}
