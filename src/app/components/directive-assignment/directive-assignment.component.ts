import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styleUrls: ['./directive-assignment.component.scss'],
})
export class DirectiveAssignmentComponent implements OnInit {
  passwordVisible: boolean = false;
  clicks: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.passwordVisible = !this.passwordVisible;
    const date = new Date();
    this.clicks.push(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`);
  }
}
