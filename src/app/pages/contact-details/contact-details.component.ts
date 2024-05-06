import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

import { UserService } from '../../services/user-service.service';
import { Contact } from '../../models/contact.model';
import { User } from '../../models/user.model';
import { Move } from '../../models/move.model';
@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetails {
  private route = inject(ActivatedRoute)
  private userService = inject(UserService)

  contact$: Observable<Contact> = this.route.data.pipe(map(data => data['contact']))
  user: User = this.userService.getUser()

  onAddMove(updatedUser: User) {

    this.user = { ...this.user, moves: [...updatedUser.moves] }
  }
}
