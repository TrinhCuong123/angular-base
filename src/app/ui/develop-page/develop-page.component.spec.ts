import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopPageComponent } from './develop-page.component';

describe('DevelopPageComponent', () => {
  let component: DevelopPageComponent;
  let fixture: ComponentFixture<DevelopPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DevelopPageComponent]
    });
    fixture = TestBed.createComponent(DevelopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
