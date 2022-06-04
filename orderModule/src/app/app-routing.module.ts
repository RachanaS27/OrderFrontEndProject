import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmorderComponent } from './confirmorder/confirmorder.component';
import { SeeorderComponent } from './seeorder/seeorder.component';


const routes: Routes = [
 {path:'seeorder',component:SeeorderComponent},
{path:'confirmorder',component:ConfirmorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
