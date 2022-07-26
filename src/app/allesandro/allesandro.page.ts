import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-allesandro',
  templateUrl: './allesandro.page.html',
  styleUrls: ['./allesandro.page.scss'],
})
export class AllesandroPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Book a Slot',
      message: 'Parking space has been booked!',
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
