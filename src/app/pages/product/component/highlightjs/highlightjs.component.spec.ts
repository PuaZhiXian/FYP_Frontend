import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HighlightjsComponent} from './highlightjs.component';

describe('HighlightjsComponent', () => {
  let component: HighlightjsComponent;
  let fixture: ComponentFixture<HighlightjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightjsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HighlightjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
