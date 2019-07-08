import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { FormGroup,FormControl } from '@angular/forms';
import {Router, ActivatedRoute,ParamMap} from '@angular/router'

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookData
  constructor(public httpClient : HttpClient, public route:ActivatedRoute, public router:Router) { }
  bookForm;
   id;
  
  ngOnInit() {
    this.bookForm = new FormGroup({
      title : new FormControl(),
      author : new FormControl(),
      department : new FormControl,
      imageURL: new FormControl(),
      description: new FormControl(),
      price: new FormControl()
    })
  
    this.id = this.route.snapshot.paramMap.get('id')
   this.httpClient.get(`https://5d109f54bebb9800143d191d.mockapi.io/books/${this.id}`)
   .toPromise()
   .then((res)=>{
     
     this.bookData = res;
     console.log(this.bookData)
     this.bookForm.setValue(
       {title: this.bookData.title,
         author:this.bookData.author,
         department:this.bookData.department,
         description:this.bookData.description,
         price:this.bookData.price,
         imageURL:''
        })
   },(err)=>{
     console.log(err)
   })
   
  }
  deleteBook(){
    console.log("d")
    this.httpClient.delete(`https://5d109f54bebb9800143d191d.mockapi.io/books/${this.id}`)
    .toPromise()
    .then((res)=>{
      alert("Book Deleted Successfully");
      this.router.navigate([''])
    },(err)=>{
      console.log(err)
    })
    
  }
}
