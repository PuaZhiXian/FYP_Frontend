import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RangeDateInputv2Component} from './range-date-inputv2.component';

describe('RangeDateInputv2Component', () => {
  let component: RangeDateInputv2Component;
  let fixture: ComponentFixture<RangeDateInputv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RangeDateInputv2Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RangeDateInputv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
