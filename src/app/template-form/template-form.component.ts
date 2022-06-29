import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent {
  answer = '';
  defaultPet = 'pet';
  genders = ['male', 'female'];

  user = {
    username: '',
    mail: '',
    secretQuestion: '',
    secretAnswer: '',
    gender: '',
    submitted: false,
  };

  @ViewChild('f') myForm!: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // REPLACE WHOLE OBJECT
    // this.myForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    // });

    // REPLACE ONLY SELECTED VALUES
    this.myForm.form.patchValue({
      username: suggestedName,
    });
    console.log(this.myForm.form);
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.myForm);

    this.user = {
      username: this.myForm.value.username,
      mail: this.myForm.value.email,
      secretQuestion: this.myForm.value.secret,
      secretAnswer: this.myForm.value.questionAnswer,
      gender: this.myForm.value.gender,
      submitted: true,
    };

    this.myForm.reset();
  }
}
