import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent implements OnInit {

  @ViewChild("puntual") puntual: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  puntuar(){
    this.puntual.nativeElement.style.display="block";
  }
  
}
