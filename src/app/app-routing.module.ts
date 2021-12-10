import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then(m => m.VerifyEmailPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'rewards-giftcard-info',
    loadChildren: () => import('./rewards-giftcard-info/rewards-giftcard-info.module').then( m => m.RewardsGiftcardInfoPageModule)
  },
  {
    path: 'rewards-giftcard-redeem',
    loadChildren: () => import('./rewards-giftcard-redeem/rewards-giftcard-redeem.module').then( m => m.RewardsGiftcardRedeemPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
