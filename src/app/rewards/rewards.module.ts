import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RewardsPage } from './rewards.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RewardsPageRoutingModule } from './rewards-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: RewardsPage }]),
    RewardsPageRoutingModule,
  ],
  declarations: [RewardsPage]
})
export class RewardsPageModule { }
