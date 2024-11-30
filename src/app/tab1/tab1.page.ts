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
      b_num: "ghfg",
      b_unnum: "gyhfgh"
    },
    {
      b_num: "njknjkjin",
      b_unnum: "hiuhuih"
    }
  ]
}

