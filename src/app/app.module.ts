import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { BirthdaysComponent } from './components/birthdays/birthdays.component';
import { NewBirthdayComponent } from './components/new-birthday/new-birthday.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BirthdaysComponent,
    NewBirthdayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
