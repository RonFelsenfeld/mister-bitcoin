import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveList } from './move-list.component';

describe('MoveList', () => {
  let component: MoveList;
  let fixture: ComponentFixture<MoveList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoveList]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MoveList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
