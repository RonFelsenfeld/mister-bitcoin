import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetails } from './contact-details.component';

describe('ContactDetails', () => {
  let component: ContactDetails;
  let fixture: ComponentFixture<ContactDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactDetails]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
