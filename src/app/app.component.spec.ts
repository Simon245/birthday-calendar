import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BirthdaysComponent } from 'src/app/components/birthdays/birthdays.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NewBirthdayComponent } from 'src/app/components/new-birthday/new-birthday.component';
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

  it(`should have as title 'birthday-calendar'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('birthday-calendar');
  });
});
