import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentPoolComponent } from './talent-pool.component';

describe('TalentPoolComponent', () => {
  let component: TalentPoolComponent;
  let fixture: ComponentFixture<TalentPoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TalentPoolComponent]
    });
    fixture = TestBed.createComponent(TalentPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
