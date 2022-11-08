import { Component } from '@angular/core';
import { Contact } from './models';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  list: Contact[] = []

  constructor(private contSvc: ContactService) { }

  processNewContact(newContact: Contact) {
    console.log(":::::new Contact: ", newContact)
    this.list = [...this.list, newContact]
  }

  contactDeleted(idx: number) {
    const tmp: Contact[] = [...this.list]
    tmp.splice(idx, 1)
    this.list = tmp
  }
  
}
