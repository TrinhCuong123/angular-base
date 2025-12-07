import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentCampaignComponent } from './recruitment-campaign.component';

describe('RecruitmentCampaignComponent', () => {
  let component: RecruitmentCampaignComponent;
  let fixture: ComponentFixture<RecruitmentCampaignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RecruitmentCampaignComponent]
    });
    fixture = TestBed.createComponent(RecruitmentCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
