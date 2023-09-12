import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleApiCollectionComponent } from './single-api-collection.component';

describe('SingleApiCollectionComponent', () => {
  let component: SingleApiCollectionComponent;
  let fixture: ComponentFixture<SingleApiCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleApiCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleApiCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
