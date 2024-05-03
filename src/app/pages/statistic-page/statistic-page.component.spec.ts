import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticPage } from './statistic-page.component';

describe('StatisticPage', () => {
  let component: StatisticPage;
  let fixture: ComponentFixture<StatisticPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StatisticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
