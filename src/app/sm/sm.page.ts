import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sm',
  templateUrl: './sm.page.html',
  styleUrls: ['./sm.page.scss'],
})
export class SmPage implements OnInit {

  constructor(private router: Router) { }
  date(){
    this.router.navigate(['date'])
  }

  ngOnInit() {
  }

}
