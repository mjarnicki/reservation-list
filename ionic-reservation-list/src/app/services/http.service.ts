import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Invitation } from '../interface/invitation';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/'
  dictionary: string;

  getInvitationList(): Observable<Invitation[]>{
    return this.http.get<Invitation[]>(this.url + 'invitations');
  }

  loadDictionary() {
    return this.http.get<string[]>(this.url + 'dictionary')
  }

  addNewInvitation(invitation) {
    return this.http.post(this.url + 'invitations', invitation)
  }
  
  updateStatus(id, object){
    return this.http.patch(this.url + 'invitations/' + id, object)
  }

  removeStatus(id){
    return this.http.delete(this.url + 'invitations/' + id)
  }
}
