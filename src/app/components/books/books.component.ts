import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];
  constructor(private client: HttpClient) { }

  ngOnInit() {
  }


getBooks() {
  console.log('getting books...?');
  this.client.get<Book[]>('https://few100api.now.sh/books ')
    .subscribe( d => this.books = d);
}
}
interface Book {
  id: string;
  title: string;
  author: string;
}