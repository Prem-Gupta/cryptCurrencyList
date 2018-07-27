import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisionChartComponent } from './comparision-chart.component';

describe('ComparisionChartComponent', () => {
  let component: ComparisionChartComponent;
  let fixture: ComponentFixture<ComparisionChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisionChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
