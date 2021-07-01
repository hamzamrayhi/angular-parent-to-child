import { ParentComponent } from './parent/parent.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path : "user" , component :UserComponent},
  {path : "register" , component :RegisterComponent},
  {path : "parent" , component :ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
