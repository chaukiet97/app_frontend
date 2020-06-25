import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../global';

@Component({
  selector: 'app-fmprofile',
  templateUrl: './fmprofile.component.html',
  styleUrls: ['./fmprofile.component.css']
})
export class FmprofileComponent implements OnInit {
  public user: any = [];
  constructor(public ws: GlobalsService) { }

  ngOnInit(): void {
    // console.log(this.ws.USERS.get(true).authToken);
    if (!this.ws.USERS.get(true).authToken) {
      setTimeout(() => {
        this.ws.USERS.navigate();
      }, 1000);
    }
    else {
      this.user=this.ws.USERS.get(true)
    }
  }
  logout(){
    this.ws.USERS.remove();
    setTimeout(() => {
      this.ws.USERS.navigate(); 
    }, 1000);
  }

}
