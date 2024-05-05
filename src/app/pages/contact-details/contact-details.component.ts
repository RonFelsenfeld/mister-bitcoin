import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetails {
  private contactService = inject(ContactService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  contact$: Observable<Contact> = this.route.data.pipe(map(data => data['contact']))
}
