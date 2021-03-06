import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './homeworks/Forms/users/users.component';
import { UserEditComponent } from './homeworks/Forms/users/user-edit/user-edit.component';
import { CurrencyComponent } from './homeworks/currency-exchange-app/currency/currency.component';
import { CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CurrAddComponent } from './homeworks/currency-exchange-app/currency/curr-add/curr-add.component';
import { CurrentTimeService } from './services/current-time.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserEditComponent,
    CurrencyComponent,
    CurrAddComponent,
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],

  providers: [CurrencyPipe, CurrentTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
