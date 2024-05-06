import { Component, EventEmitter, Output, inject } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeader {
  private userService = inject(UserService)
  private router = inject(Router)

  onLogout() {
    this.userService.logout()
    this.router.navigateByUrl('/signup')
  }
}
