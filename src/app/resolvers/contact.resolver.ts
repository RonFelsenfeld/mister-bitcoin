import { ResolveFn } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';
import { inject } from '@angular/core';

export const contactResolver: ResolveFn<Contact> = (route, state) => {
  const id = route.params['contactId']
  const contactService = inject(ContactService)
  return contactService.getContactById(id)
};
