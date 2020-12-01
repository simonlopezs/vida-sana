import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  counter = 1
  nombre = 'simo'

  constructor() { }

  ngOnInit() {
  }

  hacerAlgo(){
    this.counter++
  }

}
