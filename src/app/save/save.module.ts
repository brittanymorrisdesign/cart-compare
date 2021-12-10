import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SavePage } from './save.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SavePageRoutingModule } from './save-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: SavePage }]),
    SavePageRoutingModule,
  ],
  declarations: [SavePage]
})
export class SavePageModule { }
