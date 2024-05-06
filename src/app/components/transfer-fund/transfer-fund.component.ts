import { Component, Input, inject } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrl: './transfer-fund.component.scss'
})
export class TransferFund {
  private userService = inject(UserService)
  @Input() contact!: Contact

  amountToTransfer: number | null = null
  maxCoins = this.userService.getUser().coins

  onTransferCoins = () => {
    if (this.amountToTransfer) {
      this.userService.addMove(this.contact, this.amountToTransfer)
      this.maxCoins = this.userService.getUser().coins
      this.amountToTransfer = null
    }
  }
}
