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
  serverCreated: boolean = false;
  servers: string[] = ['Testserver1', 'Testserver2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 1000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    if (this.serverName !== '') {
      this.serverCreated = true;
      this.servers.push(this.serverName);
      return (this.serverCreationStatus = `Server has been created! Name is ${this.serverName}`);
    }
    return;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
