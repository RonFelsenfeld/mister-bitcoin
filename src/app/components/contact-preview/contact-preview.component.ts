import { Component, Input, inject } from '@angular/core';
import { take } from 'rxjs';

import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.scss'
})
export class ContactPreview {
  @Input() contact!: Contact
  private contactService = inject(ContactService)


  onRemoveContact(ev: MouseEvent, contactId: string) {
    ev.stopPropagation()

    this.contactService.deleteContact(contactId)
      .pipe(take(1))
      .subscribe({
        error: err => console.log('err:', err)
      })
  }
}
