import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServers: boolean = false;
  serverCreationStatus: string = 'No server has been created';
  serverName: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 1000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    return (this.serverCreationStatus = 'Server has been created');
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
