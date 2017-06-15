import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

// DataStructure 
import { contactData } from '../dataStructure/contactData';
import { Tag } from '../dataStructure/tag';
import { EvenementData } from '../dataStructure/evenement';

/*
  Generated class for the CreationEvenementInvitationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CreationEvenementInvitationProvider {

  constructor(public http: Http) {
    console.log('Hello CreationEvenementInvitationProvider Provider');
  }


  getListeInvites(id: number): Observable<[contactData]> {
    return this.http.get('http://2.6.10.86/Al2cServer-war/webresources/evenements/' + id + '/getListeInvites?token=' + Number(localStorage.getItem('token')))
      .map(res => { return res.json() })
  }

  getListeNonInvites(id: number): Observable<[contactData]> {
    return this.http.get('http://2.6.10.86/Al2cServer-war/webresources/evenements/' + id + '/getListeNonInvites?token=' + Number(localStorage.getItem('token')))
      .map(res => { return res.json() })
  }

  getListeTagNonInvites(id: number): Observable<[Tag]> {
    return this.http.get('http://2.6.10.86/Al2cServer-war/webresources/evenements/' + id + '/getListeTagNonInvites?token=' + Number(localStorage.getItem('token')))
      .map(res => { return res.json() })
  }



  inviterContacts(id: number, contacts: contactData[]): Observable<boolean> {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://2.6.10.86/Al2cServer-war/webresources/evenements/' + id + '/inviterContacts?token=' + Number(localStorage.getItem('token')), contacts, header)
      .map(() => { return true }, err => alert('erreur'))
  }

  inviterTags(id: number, tags: Tag[]): Observable<boolean> {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://2.6.10.86/Al2cServer-war/webresources/evenements/' + id + '/inviterTags?token=' + Number(localStorage.getItem('token')), tags, header)
      .map(() => { return true }, err => alert('erreur'))
  }

  retirerContacts(id: number, contacts: contactData[]): Observable<boolean> {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://2.6.10.86/Al2cServer-war/webresources/evenements/' + id + '/supprimerInvitationContacts?token=' + Number(localStorage.getItem('token')), contacts, header)
      .map(() => { return true }, err => alert('erreur'))
  }

  retirerTags(id: number, tags: Tag[]): Observable<boolean> {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://2.6.10.86/Al2cServer-war/webresources/evenements/' + id + '/supprimerInvitationTags?token=' + Number(localStorage.getItem('token')), tags, header)
      .map(() => { return true }, err => alert('erreur'))
  }

  getDifferentListeInvite(id: number) {
    return Observable.forkJoin<[contactData], [contactData], [Tag]>(
      this.http.get('http://2.6.10.86/Al2cServer-war/webresources/evenements/' + id + '/getListeInvites?token=' + Number(localStorage.getItem('token')))
        .map(res => { return res.json() }),
      this.http.get('http://2.6.10.86/Al2cServer-war/webresources/evenements/' + id + '/getListeNonInvites?token=' + Number(localStorage.getItem('token')))
        .map(res => { return res.json() }),
      this.http.get('http://2.6.10.86/Al2cServer-war/webresources/evenements/' + id + '/getListeTagNonInvites?token=' + Number(localStorage.getItem('token')))
        .map(res => { return res.json() })
    )
  }

  setActionInvitation(id: number, contacts: contactData[], tags: Tag[], removeContacts: contactData[], removeTags: Tag[], msg: EvenementData) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return Observable.forkJoin(
      this.http.post('http://2.6.10.86/Al2cServer-war/webresources/evenements/' + id + '/inviterContacts?token=' + Number(localStorage.getItem('token')), contacts, header)
        .map(() => { return true }, err => alert('erreur')),
      this.http.post('http://2.6.10.86/Al2cServer-war/webresources/evenements/' + id + '/inviterTags?token=' + Number(localStorage.getItem('token')), tags, header)
        .map(() => { return true }, err => alert('erreur')),
      this.http.post('http://2.6.10.86/Al2cServer-war/webresources/evenements/' + id + '/supprimerInvitationContacts?token=' + Number(localStorage.getItem('token')), removeContacts, header)
        .map(() => { return true }, err => alert('erreur')),
      this.http.post('http://2.6.10.86/Al2cServer-war/webresources/evenements/' + id + '/supprimerInvitationTags?token=' + Number(localStorage.getItem('token')), removeTags, header)
        .map(() => { return true }, err => alert('erreur')),
      this.http.put('http://2.6.10.86/Al2cServer-war/webresources/evenements/' + id + '/modifierMessage?token=' + Number(localStorage.getItem('token')), msg, header)
        .map(res => { console.log(msg.message);})
    )
  }

  getMessage(id: number): Observable<EvenementData> {
    return this.http.get('http://2.6.10.86/Al2cServer-war/webresources/evenements/' + id + '/getEvenement?token=' + Number(localStorage.getItem('token')))
      .map(res => { return res.json() })
  }

}
