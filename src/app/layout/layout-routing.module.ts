import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SevicesComponent } from './sevices/sevices.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'trang-chu', pathMatch: "full" },
            { path: 'trang-chu', component: HomeComponent },
            { path: 'about-us', component: AboutComponent },
            { path: 'sevices', component: SevicesComponent },
            { path: 'our-team', component: TeamComponent },
            { path: 'testimonial', component: TestimonialComponent },
            { path: 'blog', component: BlogComponent },
            { path: 'contact', component: ContactComponent }
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class LayoutRouting { }