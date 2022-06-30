import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  forbiddenUsernames: string[] = ['Bartosz'];

  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userDetails: new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        mail: new FormControl(null, {
          validators: [Validators.required, Validators.email],
          asyncValidators: this.forbiddenEmail,
        }),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    this.signupForm.statusChanges.subscribe((value) => {
      console.log(value);
    });
    // this.signupForm.setValue({
    //   userDetails: {
    //     name: 'bs',
    //     mail: 'sd',
    //   },
    //   gender: 'male',
    //   hobbies: [],
    // });

    // this.signupForm.patchValue({
    //   userDetails: {
    //         name: 'bartek',
    //       },
    // })
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset()
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);

    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmail(control: FormControl | any): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
