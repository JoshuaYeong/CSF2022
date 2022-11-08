import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Registration } from '../models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // @Input()
  // registration!: Registration

  @Output()
  onNewRegistration = new Subject<Registration>()

  regForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name: this.fb.control<string>("", [Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>("", [Validators.required, Validators.email])
    })
  }

  processForm() {
    console.log("::::::regForm: ", this.regForm)
    const reg: Registration = this.regForm.value as Registration
    this.onNewRegistration.next(reg)
  }

  // formSubmitted() {
  //   this.submitted = true;
  //   this.notifyMessage();
  // }

  // notifyMessage() {
  //   if (this.submitted) {
  //     notify({ message: "form submitted" }, "success", 2000);
  //   }

}
