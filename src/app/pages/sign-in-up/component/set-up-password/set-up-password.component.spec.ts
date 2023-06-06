import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpPasswordComponent } from './set-up-password.component';

describe('SetUpPasswordComponent', () => {
  let component: SetUpPasswordComponent;
  let fixture: ComponentFixture<SetUpPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetUpPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetUpPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
