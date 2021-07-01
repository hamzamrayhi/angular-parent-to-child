import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  FirstName="hamza";
  active=true;
  constructor(private Router : Router) { }

  ngOnInit(): void {
  }
  goToUser() {
    this.Router.navigate(["/user"])
  }

}
