import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AgChartsAngular } from 'ag-charts-angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './root-cmp/app.component';

import { Homepage } from './pages/homepage/homepage.component';
import { ContactPage } from './pages/contact-page/contact-page.component';
import { ContactDetails } from './pages/contact-details/contact-details.component';
import { StatisticPage } from './pages/statistic-page/statistic-page.component';
import { SignupPage } from './pages/signup-page/signup-page.component';

import { AppHeader } from './components/app-header/app-header.component';
import { ContactList } from './components/contact-list/contact-list.component';
import { ContactPreview } from './components/contact-preview/contact-preview.component';
import { ContactFilter } from './components/contact-filter/contact-filter.component';
import { Chart } from './components/chart/chart.component';
import { ContactEdit } from './components/contact-edit/contact-edit.component';
import { TransferFund } from './components/transfer-fund/transfer-fund.component';
import { MoveList } from './components/move-list/move-list.component';
import { MovePreview } from './components/move-preview/move-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    Homepage,
    AppHeader,
    ContactPage,
    ContactList,
    ContactPreview,
    ContactFilter,
    ContactDetails,
    StatisticPage,
    Chart,
    ContactEdit,
    SignupPage,
    TransferFund,
    MoveList,
    MovePreview,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgChartsAngular,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
