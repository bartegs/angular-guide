import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveAssignmentComponent } from './directive-assignment.component';

describe('DirectiveAssignmentComponent', () => {
  let component: DirectiveAssignmentComponent;
  let fixture: ComponentFixture<DirectiveAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
