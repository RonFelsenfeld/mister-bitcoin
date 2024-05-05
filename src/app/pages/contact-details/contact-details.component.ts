import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetails {
  private contactService = inject(ContactService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  contact$: Observable<Contact> = this.route.data
    .pipe(map(data => data['contact']))


  // @Input() contactId!: string
  // @Output() goBack = new EventEmitter()

  // selectedContact: Contact | null = null

  // ngOnInit(): void {
  //   this.contactService.getContactById(this.contactId).subscribe(contact => this.selectedContact = contact)
  // }

  // onGoBack(): void {
  //   this.goBack.emit()
  // }

  // ngOnDestroy(): void {
  //   this.selectedContact = null
  // }
}
