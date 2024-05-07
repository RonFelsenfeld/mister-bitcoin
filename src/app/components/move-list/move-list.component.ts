import { Component, Input } from '@angular/core';
import { Move } from '../../models/move.model';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrl: './move-list.component.scss'
})
export class MoveList {
  @Input() moves!: Move[]
  @Input() title!: string
  @Input() contact: Contact | null = null
}
