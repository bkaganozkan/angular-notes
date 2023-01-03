import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverName: string = '';
  servers = ['Server 1', 'Server 2'];
  constructor() {}

  ngOnInit(): void {}

  createNewServer() {
    this.servers.push(this.serverName);
    this.serverName = '';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }
}
