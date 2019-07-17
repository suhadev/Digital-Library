import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public httpClient : HttpClient, public router : Router) { }
  formValue
  bookForm = new FormGroup({
    title : new FormControl(),
    author : new FormControl(),
    department : new FormControl,
    imageURL: new FormControl(),
    description: new FormControl(),
    price: new FormControl()
  })

  ngOnInit() {
    console.log(this.bookForm.value)
  }
  addBookDetails(){
    this.formValue = this.bookForm.value
    this.httpClient.post("http://localhost:8000/add",{
      title : this.formValue.title,
      author: this.formValue.author,
      department:this.formValue.department,
      imageURL:this.formValue.imageURL,
      description:this.formValue.description,
      price:this.formValue.price

    })
    .toPromise()
    .then(
      (res)=>{
        alert("book details successfully added")
        this.router.navigate([''])
      },
    (err)=>{console.log(err)})
     
    console.log(this.formValue)

  }

}
