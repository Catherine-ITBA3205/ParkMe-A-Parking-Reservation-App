import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  stars:number;
  constructor(private router: Router, private alertController: AlertController) { 
    this.stars=0;
  }
  mainmenu(){
    this.router.navigate(['mainmenu'])
  }
  starClicked(i:number){
    this.stars=i;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Feedback',
      message: 'Thank you for you feedback!',
      buttons: [{
        text: 'OK',
        handler: () => {
          console.log('Confirmed');
          this.router.navigate(['mainmenu'])
        }
    }]
    });

    await alert.present();
  }


  ngOnInit() {
  }

}
