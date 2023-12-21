import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PreviewApiCollectionComponent} from './preview-api-collection.component';

describe('PreviewApiCollectionComponent', () => {
  let component: PreviewApiCollectionComponent;
  let fixture: ComponentFixture<PreviewApiCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewApiCollectionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PreviewApiCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
