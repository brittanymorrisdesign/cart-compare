import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rewards-giftcard-info',
  templateUrl: './rewards-giftcard-info.page.html',
  styleUrls: ['./rewards-giftcard-info.page.scss'],
})
export class RewardsGiftcardInfoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  go2redeem(){
    this.navCtrl.navigateForward('rewards-giftcard-redeem');
  }


  return2Main(){
    this.navCtrl.back();
  }

}
