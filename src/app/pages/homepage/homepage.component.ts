import { Component, OnInit, inject } from '@angular/core';

import { UserService } from '../../services/user-service.service';
import { BitcoinService } from '../../services/bitcoin.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class Homepage implements OnInit {
  private userService = inject(UserService)
  private bitcoinService = inject(BitcoinService)

  user: User = this.userService.getUser()
  rate!: number

  async ngOnInit(): Promise<void> {
    try {
      const res = await this.bitcoinService.getRate(this.user.coins)
      this.rate = res.data
    }
    catch (err) {
      console.log('Loading rate -> Had issues loading rate:', err)
    }
  }
}
