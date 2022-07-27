import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bcl',
  templateUrl: './bcl.page.html',
  styleUrls: ['./bcl.page.scss'],
})
export class BclPage implements OnInit {

  constructor(private router: Router) { }
  date(){
    this.router.navigate(['date'])
  }
 
  ngOnInit() {
  }

}
