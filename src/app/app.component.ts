import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-demo';
  constructor(public router: Router,) {
    this.router.events.subscribe((evt) => {
      if ((evt instanceof NavigationStart)) {
        setTimeout(() => {
          let el = document.getElementById('loading');
          if (el) {
            el.remove()
          }
        }, 4000);
      }
    });
  }
}
