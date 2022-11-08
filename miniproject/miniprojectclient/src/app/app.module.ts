import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact.component';
import { ContactService } from './services/contact.service';
import { ListComponent } from './components/list.component';

@NgModule({
  declarations: [AppComponent, ContactComponent, ListComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [ ContactService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
