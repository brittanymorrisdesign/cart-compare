import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RewardsGiftcardRedeemPage } from './rewards-giftcard-redeem.page';

const routes: Routes = [
  {
    path: '',
    component: RewardsGiftcardRedeemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RewardsGiftcardRedeemPageRoutingModule {}
