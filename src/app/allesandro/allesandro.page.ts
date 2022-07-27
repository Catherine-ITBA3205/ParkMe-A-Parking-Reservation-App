import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-allesandro',
  templateUrl: './allesandro.page.html',
  styleUrls: ['./allesandro.page.scss'],
})
export class AllesandroPage implements OnInit {

  constructor(private router: Router) { }
  date(){
    this.router.navigate(['date'])
  }


  ngOnInit() {
  }

}
