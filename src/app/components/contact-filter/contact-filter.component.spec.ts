import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFilter } from './contact-filter.component';

describe('ContactFilter', () => {
  let component: ContactFilter;
  let fixture: ComponentFixture<ContactFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactFilter]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
