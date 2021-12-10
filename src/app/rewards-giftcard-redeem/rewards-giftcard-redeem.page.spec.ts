import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RewardsGiftcardRedeemPage } from './rewards-giftcard-redeem.page';

describe('RewardsGiftcardRedeemPage', () => {
  let component: RewardsGiftcardRedeemPage;
  let fixture: ComponentFixture<RewardsGiftcardRedeemPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardsGiftcardRedeemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RewardsGiftcardRedeemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
