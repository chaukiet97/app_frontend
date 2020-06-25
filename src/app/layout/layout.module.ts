import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRouting } from './layout-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SevicesComponent } from './sevices/sevices.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BoxAboutComponent } from './shared/box-about/box-about.component';
import { BoxBlogComponent } from './shared/box-blog/box-blog.component';
import { BoxBrandComponent } from './shared/box-brand/box-brand.component';
import { BoxContactComponent } from './shared/box-contact/box-contact.component';
import { BoxCounterComponent } from './shared/box-counter/box-counter.component';
import { BoxNewslaterComponent } from './shared/box-newslater/box-newslater.component';
import { BoxPriceComponent } from './shared/box-price/box-price.component';
import { BoxProjectComponent } from './shared/box-project/box-project.component';
import { BoxServicesComponent } from './shared/box-services/box-services.component';
import { BoxTeammemberComponent } from './shared/box-teammember/box-teammember.component';
import { BoxTestmonialComponent } from './shared/box-testmonial/box-testmonial.component';
import { BoxVideoComponent } from './shared/box-video/box-video.component';
import { BoxWorkComponent } from './shared/box-work/box-work.component';
import { BoxWorkwithComponent } from './shared/box-workwith/box-workwith.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    HomeComponent,
    AboutComponent,
    SevicesComponent,
    TeamComponent,
    TestimonialComponent,
    BlogComponent,
    ContactComponent,
    BoxAboutComponent,
    BoxBlogComponent,
    BoxBrandComponent,
    BoxContactComponent,
    BoxCounterComponent,
    BoxNewslaterComponent,
    BoxPriceComponent,
    BoxProjectComponent,
    BoxServicesComponent,
    BoxTeammemberComponent,
    BoxTestmonialComponent,
    BoxVideoComponent,
    BoxWorkComponent,
    BoxWorkwithComponent,
  ],
  imports: [
    CommonModule,
    LayoutRouting,
  ]
})
export class LayoutModule { }
