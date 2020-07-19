import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { faBars, faVirus, faUserAlt, faTimesCircle, faHome, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})
export class DoctoresComponent implements OnInit {

  @ViewChild("menuContainer") menuContainer: ElementRef;
  @ViewChild("menu") menu: ElementRef;
  @ViewChild("extra") extra: ElementRef;
  @ViewChild("logo") logo: ElementRef;
  @ViewChild("logoContainer") logoContainer: ElementRef;
  @ViewChild("menuOffCanvas") menuOffCanvas: ElementRef;
  @ViewChild("footerMain") footerMain: ElementRef;
  @ViewChild("footerInfo") footerInfo: ElementRef;
  @ViewChild("footerContact") footerContact: ElementRef;
  constructor(private elem: ElementRef) { }

  public innerWidth: any;
  ngOnInit(): void {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        this.menuContainer.nativeElement.classList.add('menuContainer-on');
        this.menu.nativeElement.classList.add('menu-on');
        this.extra.nativeElement.classList.add('extra-on');
        this.logo.nativeElement.classList.add('active');
        this.logoContainer.nativeElement.classList.add('logo-on');
      }
      else {
        this.menuContainer.nativeElement.classList.remove('menuContainer-on');
        this.menu.nativeElement.classList.remove('menu-on');
        this.extra.nativeElement.classList.remove('extra-on');
        this.logo.nativeElement.classList.remove('active');
        this.logoContainer.nativeElement.classList.remove('logo-on');
      }
    }

    // const headers = this.elem.nativeElement.querySelectorAll(".headers");
    // var i = 0;
    // setInterval(() => {
    //   headers[i].style.visibility = "hidden";
    //   headers[i].style.opacity = "0";

    //   i = (i + 1) % headers.length;

    //   headers[i].style.visibility = "visible";
    //   headers[i].style.opacity = "1";
    // }, 4000);
  }

  ngAfterViewInit() {
    const footerResponsive = document.createElement('div');
    footerResponsive.classList.add('respoFooter');
    this.innerWidth = window.innerWidth;
    var j= 0;
    if (this.innerWidth <= '1000') {
      footerResponsive.appendChild(this.footerInfo.nativeElement);
      footerResponsive.appendChild(this.footerContact.nativeElement);
      this.footerMain.nativeElement.appendChild(footerResponsive);
    }

    window.onresize = () => {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth <= '1000') {
        if (j == 0) {
          footerResponsive.appendChild(this.footerInfo.nativeElement);
          footerResponsive.appendChild(this.footerContact.nativeElement);
          this.footerMain.nativeElement.appendChild(footerResponsive);
          j++;
          footerResponsive.classList.add('nyan');
        }
      }
      else {
        j = 0;
        if (footerResponsive.classList.contains('nyan')) {
          footerResponsive.classList.remove('nyan');
          this.footerMain.nativeElement.removeChild(footerResponsive);
          this.footerMain.nativeElement.appendChild(this.footerInfo.nativeElement);
          this.footerMain.nativeElement.appendChild(this.footerContact.nativeElement);
        }
      }
    }
  }


  abrirMenu() {
    this.menuOffCanvas.nativeElement.classList.toggle('menuNoVisible');
  }



  //Iconos FontAwesome 
  faBars = faBars;
  faVirus = faVirus;
  faTimesCircle = faTimesCircle;
  faUserAlt = faUserAlt;
  faHome = faHome;
  faChevronCircleRight = faChevronCircleRight;

}
