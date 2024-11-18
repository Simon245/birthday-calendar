import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BirthdaysComponent } from '../app/components/birthdays/birthdays.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { NewBirthdayComponent } from '../app/components/new-birthday/new-birthday.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        BirthdaysComponent,
        HeaderComponent,
        NewBirthdayComponent,
      ],
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'birthday-calendar'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('birthday-calendar');
  // });
  //
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain(
  //     'birthday-calendar app is running!',
  //   );
  // });
});
