import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {


  constructor(private router: Router) { }
  spot(){
    this.router.navigate(['spot'])

  }

  ngOnInit() {
  }

}
