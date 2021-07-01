import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    name="hamza";
    location="tunisia";
    statuts="activé";
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  getStatus(){
    return this.statuts;
  }
  getMessage() {
    console.log("my new message");
  }
  goToRegister() {
    this.router.navigate(["/register"])
  }

}
