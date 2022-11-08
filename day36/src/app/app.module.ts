import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http':

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { CatComponent } from './components/cat.component';
import { DogComponent } from './components/dog.component';
import { NumListComponent } from './components/num-list.component';
import { NumDisplayComponent } from './components/num-display.component';
import { BookListComponent } from './components/book-list.component';
import { BookService } from './services/book.service';

const appPath: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'dog', component:DogComponent },
  // { path: 'cat', component:CatComponent },
  { path: '', component:NumListComponent },
  { path: 'number/:num', component:NumDisplayComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatComponent,
    DogComponent,
    NumListComponent,
    NumDisplayComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(appPath)
  ],
  providers: [ BookService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
