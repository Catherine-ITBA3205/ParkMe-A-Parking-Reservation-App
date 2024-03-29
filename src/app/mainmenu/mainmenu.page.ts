import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.page.html',
  styleUrls: ['./mainmenu.page.scss'],
})
export class MainmenuPage implements OnInit {

  constructor(private router: Router) { }
  detail(){
    this.router.navigate(['detail'])
  }
  booking(){
    this.router.navigate(['booking'])
  }
  feedback(){
    this.router.navigate(['feedback'])
  }
  locations(){
    this.router.navigate(['locations'])
  }
  dandd(){
    this.router.navigate(['dandd'])
  }
  sm(){
    this.router.navigate(['sm'])
  }
  bcl(){
    this.router.navigate(['bcl'])
  }
  allesandro(){
    this.router.navigate(['allesandro'])
  }

  ngOnInit() {
  }

}
