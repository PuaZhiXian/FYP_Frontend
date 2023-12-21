import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCreateCollectionComponent } from './preview-create-collection.component';

describe('PreviewCreateCollectionComponent', () => {
  let component: PreviewCreateCollectionComponent;
  let fixture: ComponentFixture<PreviewCreateCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewCreateCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewCreateCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
