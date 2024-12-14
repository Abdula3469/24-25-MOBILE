import { Component } from '@angular/core';

interface Book{
  b_num: string,
  b_unnum: string
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  abc:string = "HSR"

  books: Book[] = [
    {
      b_num: "Star",
      b_unnum: "Rail"
    },
    {
      b_num: "Li",
      b_unnum: "Yue"
    },
    {
      b_num: "Tea",
      b_unnum: "Coffe"
    }
  ]
  deleteBook(index: number) {
    this.books.splice(index, 1); 
  }
}
