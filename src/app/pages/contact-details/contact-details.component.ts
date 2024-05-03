import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetails implements OnInit, OnDestroy {
  private contactService = inject(ContactService)

  @Input() contactId!: string
  @Output() goBack = new EventEmitter()

  selectedContact: Contact | null = null

  ngOnInit(): void {
    this.contactService.getContactById(this.contactId).subscribe(contact => this.selectedContact = contact)
  }

  onGoBack(): void {
    this.goBack.emit()
  }

  ngOnDestroy(): void {
    this.selectedContact = null
  }
}
