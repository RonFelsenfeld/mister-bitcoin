import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Homepage } from './pages/homepage/homepage.component';
import { ContactPage } from './pages/contact-page/contact-page.component';
import { StatisticPage } from './pages/statistic-page/statistic-page.component';
import { ContactDetails } from './pages/contact-details/contact-details.component';

const routes: Routes = [
  { path: 'home', component: Homepage },
  { path: 'contact', component: ContactPage },
  { path: 'contact/:id', component: ContactDetails },
  { path: 'statistics', component: StatisticPage },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
