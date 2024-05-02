import { Component, OnInit, inject } from '@angular/core';
import { take } from 'rxjs';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private contactService = inject(ContactService)
  activeView = 'contacts'

  ngOnInit(): void {
    this.contactService.loadContacts()
      .pipe(take(1))
      .subscribe({
        error: err => console.log('Had issues loading contacts:', err)
      })
  }

  setActiveView(view: string): void {
    this.activeView = view
  }
}
