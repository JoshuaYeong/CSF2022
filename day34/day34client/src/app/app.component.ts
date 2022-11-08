import { Component } from '@angular/core';
import { Registration } from './models';
import { RegistrationService } from './services/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private regSvc: RegistrationService) { }

  processNewRegistration(newRegistration: Registration) {
    console.log(":::::new registration: ", newRegistration);
    this.regSvc.newRegistration(newRegistration).then(result => {
      console.log(':::::RESULT: ', result);
      alert(`Your Registration ID is: ${result.message}`)
    }).catch(error => {
      console.error(":::::ERROR: ", error);
      alert(`Your Registration ID is: ${JSON.stringify(error)}`)
    })
  }

}
