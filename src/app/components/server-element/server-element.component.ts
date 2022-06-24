import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {
    type: string;
    content: string;
    name: string;
  } = {
    type: '',
    content: '',
    name: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
