import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  checkoutForm = [];
  constructor(
    private http: HttpClient) {}

  onSubmit( checkoutForm: {name: string; password: string } ) {
    console.log(this.checkoutForm.values);
    this.http.post(
      'https://angular-form-13d74.firebaseio.com/posts.json',
      checkoutForm ).subscribe(reponseData =>{
        console.log(reponseData);
    });
  }
  ngOnInit() {
  }

}
