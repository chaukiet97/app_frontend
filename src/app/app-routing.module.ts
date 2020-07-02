import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { AuthGuard } from './global/auth.guard';

const routes: Routes = [
  {path:'',loadChildren:()=>LayoutModule},
  {path:'account',loadChildren:()=>LoginModule,},
  // canActivate:[AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }