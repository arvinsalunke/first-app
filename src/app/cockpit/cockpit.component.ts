import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.scss"]
})
export class CockpitComponent implements OnInit {
  @Output() sreverCreated = new EventEmitter<{ serverName: string, serverDetail: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverDetail: string }>();
  newServerName: string = "";
  newServerDescription: string = "";

  constructor() { }

  ngOnInit() { }

  onServerAdded() {
    this.sreverCreated.emit({
      serverName: this.newServerName,
      serverDetail: this.newServerDescription
    });
  }
  onBlueprintAdded() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverDetail: this.newServerDescription
    });
  }
}
