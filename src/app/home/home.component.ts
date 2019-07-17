import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookData

  searchResult = []
  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:8000/")
      .toPromise()
      .then((res) => {
        console.log(res)
        this.bookData = res

      },
        (err) => {
          console.log(err)
        })
  }
  // searchBooks(){
  //   this.bookData.map((book)=>{
  //     if(book.title.indexof(searchText)!== -1) {
  //       this.searchResult.push(book)
  //     }
  //   })
  // }

}
