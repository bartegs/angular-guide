import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-assignment',
  templateUrl: './binding-assignment.component.html',
  styleUrls: ['./binding-assignment.component.scss'],
})
export class BindingAssignmentComponent implements OnInit {
  username: string = '';
  constructor() {}

  ngOnInit(): void {}

  onInputReset(): void {
    if (this.username !== '') {
      this.username = '';
    }
  }
}
