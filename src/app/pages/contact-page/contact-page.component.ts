import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPage {
  private contactService = inject(ContactService)
  contacts$!: Observable<Contact[]>
  selectedContactId: string | null = null

  ngOnInit(): void {
    this.contacts$ = this.contactService.contacts$
  }

  onSelectContact(contactId: string): void {
    this.selectedContactId = contactId
  }
}
