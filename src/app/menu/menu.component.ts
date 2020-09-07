import { Component, OnInit } from "@angular/core";
import { faVideo, faStickyNote, faHome, faPowerOff, faUserAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faUserAlt = faUserAlt;
  faVideo = faVideo;
  faStickyNote = faStickyNote;
  faHome = faHome;
  faPowerOff = faPowerOff;
}
