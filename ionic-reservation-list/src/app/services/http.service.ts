import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invitation } from '../interface/invitation';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/'


  getInvitationList(): Observable<Invitation[]>{
    return this.http.get<Invitation[]>(this.url + 'invitations');
  }

  loadDictionary() {
    return this.http.get<string[]>(this.url + 'dictionary');
  }
}
