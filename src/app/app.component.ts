import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  servers = [];

  onAddServer(serverData: { serverName: string, serverDetail: string }) {
    this.servers.push({
      type: "server",
      name: serverData.serverName,
      description: serverData.serverDetail
    });
  }
  onAddBlueprint(serverData: { serverName: string, serverDetail: string }) {
    this.servers.push({
      type: "blueprint",
      name: serverData.serverName,
      description: serverData.serverDetail
    });
  }
}
