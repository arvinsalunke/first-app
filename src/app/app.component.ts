import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  servers = [];
  newServerName: string = "";
  newServerDescription: string = "";

  onAddServer() {
    this.servers.push({
      type: 'server',
      name: this.newServerName,
      description: this.newServerDescription
    });
  }
  onAddBlueprint() {
    this.servers.push({
      type: 'blueprint',
      name: this.newServerName,
      description: this.newServerDescription
    });
  }
}
