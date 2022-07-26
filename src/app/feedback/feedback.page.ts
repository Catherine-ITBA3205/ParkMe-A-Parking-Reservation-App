import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  stars:number;
  constructor(private router: Router) { 
    this.stars=0;
  }
  mainmenu(){
    this.router.navigate(['mainmenu'])
  }
  starClicked(i:number){
    this.stars=i;
  }

  ngOnInit() {
  }

}
