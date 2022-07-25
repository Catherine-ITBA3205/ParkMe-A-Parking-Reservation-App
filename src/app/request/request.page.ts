import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'SMS',
      message: 'Your message has been sent!',
      buttons: [{
        text: 'OK',
        handler: () => {
          console.log('Confirmed');
          this.router.navigate(['messages'])
        }
    }]
    });

    await alert.present();
  }
  

  ngOnInit() {
  }

}
