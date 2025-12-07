import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateConversationComponent } from './candidate-conversation.component';

describe('CandidateConversationComponent', () => {
  let component: CandidateConversationComponent;
  let fixture: ComponentFixture<CandidateConversationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CandidateConversationComponent]
    });
    fixture = TestBed.createComponent(CandidateConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
