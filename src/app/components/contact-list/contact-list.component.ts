import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactList {
  @Input() contacts!: Contact[] | null
  @Output() selectContact = new EventEmitter<string>()

  onSelectContact(contactId: string): void {
    this.selectContact.emit(contactId)
  }
}
