import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BookDetails } from '../models';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {

  bookId!: string
  book!: BookDetails

  constructor(private activatedRoute: ActivatedRoute, private title: Title,
    private bookSvc: BookService) { }

  ngOnInit(): void {
    this.book = {
      bookId: '',
      title: '',
      description: '',
      authors: '',
      pages: 0,
      rating: 0,
      imageUrl: ''
    }

    this.bookId = this.activatedRoute.snapshot.params['bookId']
    this.title.setTitle(`Book: ${this.bookId}`)
    this.bookSvc.getBookById(this.bookId)
      .then(result => {
        console.log(":::::BOOK DETAILS: ", result)
        this.book = result
      }).catch(error => {
        console.log(":::::ERROR ", error)
      })
  }

}
