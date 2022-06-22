import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingAssignmentComponent } from './binding-assignment.component';

describe('BindingAssignmentComponent', () => {
  let component: BindingAssignmentComponent;
  let fixture: ComponentFixture<BindingAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
