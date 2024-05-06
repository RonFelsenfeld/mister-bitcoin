import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovePreview } from './move-preview.component';

describe('MovePreview', () => {
  let component: MovePreview;
  let fixture: ComponentFixture<MovePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovePreview]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MovePreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
