import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiComponentComponent } from './ui-component.component';

describe('UiComponentComponent', () => {
  let component: UiComponentComponent;
  let fixture: ComponentFixture<UiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
