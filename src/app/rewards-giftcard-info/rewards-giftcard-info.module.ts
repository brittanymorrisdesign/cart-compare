import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RewardsGiftcardInfoPageRoutingModule } from './rewards-giftcard-info-routing.module';

import { RewardsGiftcardInfoPage } from './rewards-giftcard-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RewardsGiftcardInfoPageRoutingModule
  ],
  declarations: [RewardsGiftcardInfoPage]
})
export class RewardsGiftcardInfoPageModule {}
