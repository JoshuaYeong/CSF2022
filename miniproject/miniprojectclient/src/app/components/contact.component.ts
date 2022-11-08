import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Contact } from '../models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contForm!: FormGroup
  contList!: FormArray
  
  @Input()
  contact!: Contact

  @Output()
  onNewContact = new Subject<Contact>()

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contForm = this.createContact(this.contact)
  }

  addContact() {
    this.contList = this.createList()
    this.contList.push(this.createContact())
  }

  processForm() {
    console.log(":::::contForm: ", this.contForm)
    const cont: Contact = this.contForm.value as Contact
    this.onNewContact.next(cont)
  }

  private createContact(cont?: Contact): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>("", [Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>("", [Validators.required, Validators.email]),
      mobile: this.fb.control<string>("", [Validators.required, Validators.pattern("^[89][0-9]{7}$")])
    })
  }

  private createList(contList: Contact[] = []): FormArray {
    return this.fb.array(contList.map(cont => this.createContact(cont)))
  }

}
