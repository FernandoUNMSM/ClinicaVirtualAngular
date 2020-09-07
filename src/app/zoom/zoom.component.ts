import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-zoom",
  templateUrl: "./zoom.component.html",
  styleUrls: ["./zoom.component.css"]
})
export class ZoomComponent implements OnInit {

  finalizada: boolean = false;
  redirect: boolean = true;

  @ViewChild("puntual") puntual: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  puntuar(){
    // this.puntual.nativeElement.style.display="block";
    this.finalizada = true;
  }

  redirigir() {
    this.redirect = false;
  }

  faStar = faStar;
}
