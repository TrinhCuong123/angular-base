import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxAiMarketingComponent } from './mailbox-ai-marketing.component';

describe('MailboxAiMarketingComponent', () => {
  let component: MailboxAiMarketingComponent;
  let fixture: ComponentFixture<MailboxAiMarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MailboxAiMarketingComponent]
    });
    fixture = TestBed.createComponent(MailboxAiMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
