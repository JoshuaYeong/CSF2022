import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Contact } from '../models';

const URL = "http://localhost:8080/api/contact";

@Injectable()
export class ContactService {
  constructor(private http: HttpClient) {}

  newContact(contact: Contact): Promise<any> {

    const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')

    return firstValueFrom(
        this.http.post<any>(URL, contact, { headers })
    )
  }

}
