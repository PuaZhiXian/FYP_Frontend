import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectApiTableComponent } from './project-api-table.component';

describe('ProjectApiTableComponent', () => {
  let component: ProjectApiTableComponent;
  let fixture: ComponentFixture<ProjectApiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectApiTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectApiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
