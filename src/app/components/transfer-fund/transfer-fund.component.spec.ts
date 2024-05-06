import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFund } from './transfer-fund.component';

describe('TransferFund', () => {
  let component: TransferFund;
  let fixture: ComponentFixture<TransferFund>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferFund]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TransferFund);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
