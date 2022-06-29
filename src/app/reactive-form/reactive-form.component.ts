import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'name': new FormControl(null),
      'mail': new FormControl(null),
      'gender': new FormControl('male'),
    });
  }
}
