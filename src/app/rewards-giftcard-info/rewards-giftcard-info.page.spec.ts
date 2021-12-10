import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RewardsGiftcardInfoPage } from './rewards-giftcard-info.page';

describe('RewardsGiftcardInfoPage', () => {
  let component: RewardsGiftcardInfoPage;
  let fixture: ComponentFixture<RewardsGiftcardInfoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardsGiftcardInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RewardsGiftcardInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
