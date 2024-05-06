import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { contactResolver } from './resolvers/contact.resolver';

import { Homepage } from './pages/homepage/homepage.component';
import { ContactPage } from './pages/contact-page/contact-page.component';
import { StatisticPage } from './pages/statistic-page/statistic-page.component';
import { ContactDetails } from './pages/contact-details/contact-details.component';
import { SignupPage } from './pages/signup-page/signup-page.component';

import { ContactEdit } from './components/contact-edit/contact-edit.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: Homepage, canActivate: [authGuard] },
  { path: 'contact', component: ContactPage, canActivate: [authGuard] },
  { path: 'contact/edit', component: ContactEdit, canActivate: [authGuard] },
  { path: 'contact/edit/:contactId', component: ContactEdit, canActivate: [authGuard], resolve: { contact: contactResolver } },
  { path: 'contact/:contactId', component: ContactDetails, canActivate: [authGuard], resolve: { contact: contactResolver } },
  { path: 'statistics', component: StatisticPage, canActivate: [authGuard] },
  { path: 'signup', component: SignupPage },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
