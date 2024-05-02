import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeader {
  @Output() changeView = new EventEmitter<string>()
  activeLink = 'home'

  onSetActiveLink(link: string): void {
    this.activeLink = link
    this.changeView.emit(link)
  }
}
