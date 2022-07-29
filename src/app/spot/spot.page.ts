import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.page.html',
  styleUrls: ['./spot.page.scss'],
})
export class SpotPage implements OnInit {


  constructor(private alertController: AlertController, private router: Router) { }

   changeColor(){
   }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Thank You!',
      message: 'Parking space has been booked',
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
