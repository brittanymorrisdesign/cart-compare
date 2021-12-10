import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { NavController} from '@ionic/angular'

@Component({
  selector: 'app-rewards-giftcard-redeem',
  templateUrl: './rewards-giftcard-redeem.page.html',
  styleUrls: ['./rewards-giftcard-redeem.page.scss'],
})
export class RewardsGiftcardRedeemPage implements OnInit {

  constructor(public alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  showAlert() {

    this.alertController.create({
      header: 'Confirmation',
      subHeader: 'Redeem Gift Card',
      message: 'We have recieved your request.',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }
  
  return2Main(){
    this.navCtrl.back();
  }
}
