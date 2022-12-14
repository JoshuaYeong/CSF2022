import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list.component';
import { BookService } from './services/book.service';
import { BookDisplayComponent } from './components/book-display.component';

const appRoutes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'book/:bookId', component: BookDisplayComponent},

  // Catch all
  { path: '**', redirectTo: '/', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDisplayComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ BookService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
