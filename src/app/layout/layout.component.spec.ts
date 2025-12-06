import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLayoutComponent } from './layout.component';

describe('AppLayoutComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppLayoutComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppLayoutComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-base'`, () => {
    const fixture = TestBed.createComponent(AppLayoutComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-base');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppLayoutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-base app is running!');
  });
});
