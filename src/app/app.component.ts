import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isTemplateActive = false;
  isReactiveActive = false;
  isAssignmentActive = true;

  switchToTemplate() {
    this.isTemplateActive = true;
    this.isReactiveActive = false;
    this.isAssignmentActive = false;
  }

  switchToReactive() {
    this.isTemplateActive = false;
    this.isReactiveActive = true;
    this.isAssignmentActive = false;
  }

  switchToAssignment() {
    this.isTemplateActive = false;
    this.isReactiveActive = false;
    this.isAssignmentActive = true;
  }
}
