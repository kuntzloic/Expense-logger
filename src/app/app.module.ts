import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";

// import pour la localisation en fr
import { registerLocaleData } from "@angular/common";
import * as fr from '@angular/common/locales/fr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NewExpenseComponent } from './components/new-expense/new-expense.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatsExpensesWidgetComponent } from './components/stats-expenses-widget/stats-expenses-widget.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    NewExpenseComponent,
    ExpensesComponent,
    StatsExpensesWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
