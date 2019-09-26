import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  createNewServer = true;
  serverCreationStatus = "Server not created";
  serverName = "";
  serverCreated = false;
  servers = ["Database Server", "API Server"];

  constructor() {
    setTimeout(() => {
      return this.createNewServer = false;
    }, 2000);
  }

  ngOnInit() {
  }

  createServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "New server created! with the name: " + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
