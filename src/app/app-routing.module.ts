import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';

const routes: Routes = [
  {path:'',loadChildren:()=>LayoutModule},
  {path:'account',loadChildren:()=>LoginModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }