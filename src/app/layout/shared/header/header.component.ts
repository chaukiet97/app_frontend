import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalsService } from '../../../global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menu: any;
  public width: number = 0;
  constructor(
    public ws: GlobalsService,
    public router: Router,
  ) {
    this.menu = [
      { id: 1, name: "HOME", link: "trang-chu", description: "", detail: "", },
      { id: 2, name: "ABOUT", link: "about-us", description: "", detail: "", },
      { id: 3, name: "SERVICES", link: "sevices", description: "", detail: "", },
      { id: 4, name: "TEAM", link: "our-team", description: "", detail: "", },
      { id: 5, name: "TESTMONIAL", link: "testimonial", description: "", detail: "", },
      { id: 6, name: "BLOG", link: "blog", description: "", detail: "", },
      { id: 7, name: "CONTACT", link: "contact", description: "", detail: "", },
    ];
    this.width = document.body.getBoundingClientRect().width;

  }

  ngOnInit() {
    if (window['fixmenu']) {

      window['fixmenu']();
    }
    if (window['activeMenu']) {
      window['activeMenu']();
    }

  }
  logout() {
    this.ws.USERS.remove();
    setTimeout(() => {
      this.ws.USERS.navigate(); 
    }, 1000);
  }


}
