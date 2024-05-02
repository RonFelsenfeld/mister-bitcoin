import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root-cmp/app.component';
import { HttpClientModule } from '@angular/common/http';
import { Homepage } from './pages/homepage/homepage.component';
import { AppHeader } from './cmps/app-header/app-header.component';
import { ContactPage } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    Homepage,
    AppHeader,
    ContactPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
