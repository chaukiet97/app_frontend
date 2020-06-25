import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login.component';
import { FmloginComponent } from './fmlogin/fmlogin.component';
import { FmprofileComponent } from './fmprofile/fmprofile.component';


const routes: Routes = [
    {
        path: '', component: LoginComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: "full" },
            {path:'login',component:FmloginComponent},
            {path:'profile',component:FmprofileComponent}

        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class LoginRoutingModule { }