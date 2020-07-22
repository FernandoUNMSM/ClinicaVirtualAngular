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
  public doctores: any;
  constructor(private elem: ElementRef) {
    this.doctores = [{
      nombre: "Castillo Guerrero Jorge",
      especialidad: "Dermatologia",
      universidad: "Universidad Nacional Mayor de San Marcos",
      anosServicio: "12",
      puntuacion: "3.7/5",
      cmp: "42363",
      img_url: "1.jpg"
    },
    {
      nombre: "Gomez Correa Guissela",
      especialidad: "Ginecologia",
      universidad: "Universiadad: Universidad San Ignacio de la Oyola",
      anosServicio: "7",
      puntuacion: "4.2/5",
      cmp: "079072",
      img_url: "2.jpg"
    },
    {
      nombre: "Barrenechea Quispe Ignacio",
      especialidad: "Pediatria",
      universidad: "Universidad del Pacifico",
      anosServicio: "5",
      puntuacion: "4.7/5",
      cmp: "071538",
      img_url: "3.jpg"
    },
    {
      nombre: "Dr. Cadillo Gamero Gustavo",
      especialidad: "Medicina General",
      universidad: "Universidad de Lima",
      anosServicio: "3",
      puntuacion: "2.6 / 5",
      cmp: "49526",
      img_url: "4.jpg"
    },
    {
      nombre: "Dra. Herrera Zegarra Maria",
      especialidad: "Otorrinonaringologia",
      universidad: "N.A.",
      anosServicio: "15",
      puntuacion: "4.0 / 5",
      cmp: "25015",
      img_url: "5.jpg"
    },
    {
      nombre: "Dr. Cortez de la Vega Pedro",
      especialidad: "Oftalmologia",
      universidad: "Universidad Cientifica del Sur",
      anosServicio: "4",
      puntuacion: "2.1 / 5",
      cmp: "051657",
      img_url: "6.jpg"
    },
    {
      nombre: "Dr. Chupitaz Segovia Vito",
      especialidad: "Miología",
      universidad: "Universidad Cayetano Heredia",
      anosServicio: "22",
      puntuacion: "4.7 / 5",
      cmp: "067652",
      img_url: "7.jpg"
    },
    {
      nombre: "Dra. Quiroz Bautista Elena",
      especialidad: "Osteología",
      universidad: "Universidad Peruana de Ciencias Aplicadas",
      anosServicio: "7",
      puntuacion: "3.2 / 5",
      cmp: "035403",
      img_url: "12.jpg"
    },
    {
      nombre: "Dr. Gutierrez Zea Mauricio",
      especialidad: "Medicina General",
      universidad: "Universidad Nacional Mayor de San Marcos",
      anosServicio: "3",
      puntuacion: "2.4 / 5",
      cmp: "061241",
      img_url: "8.jpg"
    },
    {
      nombre: "Dra. Delgado Cabrera Scarlet",
      especialidad: "Pediatria",
      universidad: "Universidad de Piura",
      anosServicio: "2",
      puntuacion: "3.0 / 5",
      cmp: "033871",
      img_url: "13.jpg"
    },
    {
      nombre: "Luis Izquierdo Jr.",
      especialidad: "oftalmólogo",
      universidad: "Universidad Nacional Federico Villareal",
      anosServicio: "12",
      puntuacion: "4.5/ 5",
      cmp: "076150",
      img_url: "9.jpg"
    },
    {
      nombre: "Luis Izquierdo Vásquez",
      especialidad: "Médico cirujano",
      universidad: "Universidad Nacional Mayor de San Marcos",
      anosServicio: "25",
      puntuacion: "5/ 5",
      cmp: "38801",
      img_url: "10.jpg"
    },
    {
      nombre: "Juan Carloz Izquiero",
      especialidad: "oftalmólogo",
      universidad: "Universidad Particular San Martin de Porres",
      anosServicio: "15",
      puntuacion: "4.9/ 5",
      cmp: "30852",
      img_url: "11.jpg"
    },
    {
      nombre: "María Alejandra Henríquez",
      especialidad: "Oftalmoga.",
      universidad: "Escuela Paulista de Medicina, Brasil",
      anosServicio: "10",
      puntuacion: "4.8/ 5",
      cmp: "38601",
      img_url: "17.jpg"
    },
    {
      nombre: "Renzo Cañete",
      especialidad: "oftalmólogo",
      universidad: "Universidad Nacional Federico Villareal",
      anosServicio: "7",
      puntuacion: "4/ 5",
      cmp: "52700",
      img_url: "14.jpg"
    },
    {
      nombre: "Luis Izquierdo Vásquez",
      especialidad: "Médico cirujano",
      universidad: "Universidad Nacional Mayor de San Marcos",
      anosServicio: "12",
      puntuacion: "4.9/ 5",
      cmp: "34421",
      img_url: "15.jpg"
    },
    {
      nombre: "Ramiro Rojas",
      especialidad: "Oftalmologo",
      universidad: "Universidad Nacional Mayor de San Marcos",
      anosServicio: "17",
      puntuacion: "4.9/ 5",
      cmp: "44848",
      img_url: "16.jpg"
    },
    {
      nombre: "Luis Izquierdo Vásquez",
      especialidad: "Médico cirujano",
      universidad: "Universidad Nacional Mayor de San Marcos",
      anosServicio: "12",
      puntuacion: "4.9/ 5",
      cmp: "43598",
      img_url: "19.jpg"
    },
    {
      nombre: "Marcela Abarca Benavente",
      especialidad: "Otorrinolaringología",
      universidad: "Universidad Nacional Mayor de San Marcos",
      anosServicio: "11",
      puntuacion: "3.8/ 5",
      cmp: "079804",
      img_url: "18.jpg"
    },
    {
      nombre: "Max Carlos Acosta Chacaltana",
      especialidad: "Endocrinologia",
      universidad: "Universidad Privada San Martín de Porres.",
      anosServicio: "19",
      puntuacion: "4.7/ 5",
      cmp: "036208",
      img_url: "20.jpg"
    },
    {
      nombre: "Jorge Mario Alarcon Piana",
      especialidad: "Reumatologia",
      universidad: "Universidad Cayetano Heredia",
      anosServicio: "13",
      puntuacion: "4.3/ 5",
      cmp: "023670",
      img_url: "21.jpg"
    },
    {
      nombre: "Jose Samuel Alarcon Vera",
      especialidad: "Cirugia General",
      universidad: "Universidad Privada San Martin de Porres.",
      anosServicio: "16",
      puntuacion: "4.4/ 5",
      cmp: "045225",
      img_url: "22.jpg"
    },
    {
      nombre: "Alfredo Aller Fernandini",
      especialidad: "Pediatría",
      universidad: "Universidad Cayetano Heredia",
      anosServicio: "17",
      puntuacion: "4/ 5",
      cmp: "030185",
      img_url: "23.jpg"
    },
    {
      nombre: "Edgar Eduardo Alva Alva",
      especialidad: "Gastroenterología",
      universidad: "Universidad Privada Ricardo Palma",
      anosServicio: "12",
      puntuacion: "4.8/ 5",
      cmp: "012649",
      img_url: "24.jpg"
    },
    {
      nombre: "Aldo David Alvarado Hinojosa",
      especialidad: "TRAUMATOLOGÍA",
      universidad: "Universidad Nacional Mayor de San Marcos",
      anosServicio: "14",
      puntuacion: "4.9/ 5",
      cmp: "042576",
      img_url: "26.jpg"
    },
    {
      nombre: "Leoncio Eduardo Amador Acosta",
      especialidad: "UROLOGIA",
      universidad: "Universidad Nacional Federico Villareal",
      anosServicio: "17",
      puntuacion: "4.6/ 5",
      cmp: "027797",
      img_url: "27.jpg"
    },
    {
      nombre: "Henry Alexander Anchante Hernandez",
      especialidad: "CARDIOLOGÍA",
      universidad: "Universidad Nacional Mayor de San Marcos",
      anosServicio: "14",
      puntuacion: "4.3/ 5",
      cmp: "019077",
      img_url: "28.jpg"
    },
    {
      nombre: "Daniel Marcos Angulo Chocano",
      especialidad: "Medicina Interna",
      universidad: "Universidad Ricardo Palma",
      anosServicio: "12",
      puntuacion: "4.9/ 5",
      cmp: "037634",
      img_url: "29.jpg"
    },
    {
      nombre: "Alberto Eduardo Arias Castratt",
      especialidad: "OTORRINOLARINGOLOGÍA",
      universidad: "Universidad Nacional Mayor de San Marcos",
      anosServicio: "119",
      puntuacion: "4.8/ 5",
      cmp: "026736",
      img_url: "30.png"
    },
    {
      nombre: "Graciela Claudia Karina Artica Aguirre",
      especialidad: "MEDICINA FISICA Y REHABILITACION",
      universidad: "Universidad Nacional Federico Villareal",
      anosServicio: "16",
      puntuacion: "4.7/ 5",
      cmp: "017652",
      img_url: "25.jpg"
    },
    {
      nombre: "Mauricio Bassino Pinasco",
      especialidad: "CIRUGÍA TORÁCICA Y CARDIOVASCULAR",
      universidad: "Universidad Cientifica del sur",
      anosServicio: "15",
      puntuacion: "3.8/ 5",
      cmp: "033447",
      img_url: "31.jpg"
    },
    {
      nombre: "Carmen Liliana Bendezu Injante",
      especialidad: "NEUROLOGÍA",
      universidad: "Universidad Nacional Mayor de San Marcos",
      anosServicio: "12",
      puntuacion: "4.9/ 5",
      cmp: "021249",
      img_url: "34.jpg"
    },
    {
      nombre: "Wilfredo Beethoven Beltran Guevara",
      especialidad: "PEDIATRÍA",
      universidad: "Universidad Nacional Mayor de San Marcos",
      anosServicio: "14",
      puntuacion: "4.3/ 5",
      cmp: "037214",
      img_url: "32.png"
    },
    {
      nombre: "Abuid Ticona, Juan",
      especialidad: "Endocrinología",
      universidad: "Universidad Peruana Cayetano Heredia",
      anosServicio: "21",
      puntuacion: "4.9/ 5",
      cmp: "039699",
      img_url: "33.jpg"
    },
    {
      nombre: "Acevedo Tizon, Anaïs Caterina",
      especialidad: "Cirugía General",
      universidad: "Universidad Peruana Cayetano Heredia",
      anosServicio: "17",
      puntuacion: "4.7/ 5",
      cmp: "09944",
      img_url: "35.png"
    },
    {
      nombre: "Acha Sanchéz, José Luis",
      especialidad: "Neurocirugía",
      universidad: "Universidad Privada San Juan Bautista",
      anosServicio: "15",
      puntuacion: "4.2/ 5",
      cmp: "60449",
      img_url: "36.jpg"
    },
    {
      nombre: "Achata Arenas, Jorge Hernan",
      especialidad: "Cirugía Vascular",
      universidad: "Universidad Nacional San Agustín de Arequipa",
      anosServicio: "25",
      puntuacion: "5/ 5",
      cmp: "44485",
      img_url: "37.jpg"
    },
    {
      nombre: "Acosta Galli, María Ysabel",
      especialidad: "Pediatría",
      universidad: "Universidad Nacional Mayor de San Marcos",
      anosServicio: "23",
      puntuacion: "4.3/ 5",
      cmp: "09114",
      img_url: "38.jpg"
    },
    {
      nombre: "Aguilar Del Rosario, Clemente Luis",
      especialidad: "Traumatología",
      universidad: "Universidad Nacional Mayor de San Marcos",
      anosServicio: "23",
      puntuacion: "4.9/ 5",
      cmp: "19052",
      img_url: "39.png"
    },
    {
      nombre: "Aguilar Rivera, William",
      especialidad: "Psiquiatría",
      universidad: "Universidad Nacional Mayor de San Marcos",
      anosServicio: "15",
      puntuacion: "4.4/ 5",
      cmp: "13818",
      img_url: "40.jpg"
    },
    // {
    //   nombre: "Alania Chávez, Paul Francis",
    //   especialidad: "Traumatología",
    //   universidad: "Universidad Nacional Mayor de San Marcos",
    //   anosServicio: "14",
    //   puntuacion: "4.3/ 5",  
    //   cmp: "30030",
    //   img_url: ".jpg"
    // },
    {
      nombre: "Bustos Arévalo, María Del Pilar",
      especialidad: "Oftalmología",
      universidad: "Universidad Católica de Santiago de Guayaquill",
      anosServicio: "23",
      puntuacion: "4.9/ 5",
      cmp: "40767",
      img_url: "41.jpg"
    },
    //{
    //   nombre: "Alejos Silva, Cesar Augusto",
    //   especialidad: "Anestesia",
    //   universidad: "Universidad San Martin de Porres",
    //   anosServicio: "11",
    //   puntuacion: "4/ 5",
    //   cmp: "26494",
    //   img_url: ".jpg"
    // },
    // {
    //   nombre: "Aliaga Bravo, Engels Pedro",
    //   especialidad: "Oftalmologo",
    //   universidad: "Universidad Peruana Cayetano Heredia",
    //   anosServicio: "13",
    //   puntuacion: "4.1/ 5",
    //   cmp: "37153",
    //   img_url: ".jpg"
    // },
    // {
    //   nombre: "Alvarez Pirela, Jessica Mercedes",
    //   especialidad: "Pediatría",
    //   universidad: "Universidad de Carabobo-Venezuela",
    //   anosServicio: "14",
    //   puntuacion: "4.7/ 5",
    //   cmp: "30142",
    //   img_url: ".jpg"
    // },
    // {
    //   nombre: "Alvarez Chavez, Carlos Luis",
    //   especialidad: "Emergencia Adultos",
    //   universidad: "Universidad Nacional Mayor de San Marcos",
    //   anosServicio: "21",
    //   puntuacion: "4.2/ 5",
    //   cmp: "83194",
    //   img_url: ".jpg"
    // },
    // {
    //   nombre: "Amaro Padilla, Rosalia Elena",
    //   especialidad: "Odontología",
    //   universidad: "Universidad Peruana Cayetano Heredia",
    //   anosServicio: "12",
    //   puntuacion: "3.5/ 5",
    //   cmp: "22771",
    //   img_url: ".jpg"
    // },
    // {
    //   nombre: "Amorín Kajatt, Edgar",
    //   especialidad: "Cirugía Torácica Y Cardíaca",
    //   universidad: "Universidad Nacional Mayor de San Marcos",
    //   anosServicio: "12",
    //   puntuacion: "4.7/ 5",
    //   cmp: "14719",
    //   img_url: ".jpg"
    // },
    // {
    //   nombre: "Anduaga Merino, Germán",
    //   especialidad: "Cirugía Pediátrica",
    //   universidad: "Universidad Nacional Mayor de San Marcos",
    //   anosServicio: "17",
    //   puntuacion: "4.3/ 5",
    //   cmp: "14671",
    //   img_url: ".jpg"
    // },
    // {
    //   nombre: "Apaza León, José Luis",
    //   especialidad: "Cirugía General",
    //   universidad: "Universidad Nacional San Agustín de Arequipa",
    //   anosServicio: "23",
    //   puntuacion: "4.7/ 5",
    //   cmp: "03849",
    //   img_url: ".jpg"
    // }
    ];
  }

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

  }

  ngAfterViewInit() {
    const footerResponsive = document.createElement('div');
    footerResponsive.classList.add('respoFooter');
    this.innerWidth = window.innerWidth;
    var j = 0;
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
