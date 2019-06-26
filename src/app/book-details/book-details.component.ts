import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { FormGroup } from '@angular/forms';
import {Router, ActivatedRoute,ParamMap} from '@angular/router'

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(public httpClient : HttpClient) { }
  bookForm = new FormGroup({

  })
  
  ngOnInit() {
    // console.log(this.route.snapshot.ParamMap.get('id'))
    this.httpClient.get(`https://5d109f54bebb9800143d191d.mockapi.io/books/${id}`)
    .toPromise()
    .then((res)=>{

    },
    (err)=>{})
  }

}
