import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RewardsGiftcardRedeemPageRoutingModule } from './rewards-giftcard-redeem-routing.module';

import { RewardsGiftcardRedeemPage } from './rewards-giftcard-redeem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RewardsGiftcardRedeemPageRoutingModule
  ],
  declarations: [RewardsGiftcardRedeemPage]
})
export class RewardsGiftcardRedeemPageModule {}
