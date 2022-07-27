import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dandd',
  templateUrl: './dandd.page.html',
  styleUrls: ['./dandd.page.scss'],
})
export class DanddPage implements OnInit {

  constructor(private router: Router) { }
  date(){
    this.router.navigate(['date'])
  }

  ngOnInit() {
  }

}
