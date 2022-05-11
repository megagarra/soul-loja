import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  slogan: string = 'CONHEÇA A SOULCODE!';
  descricaoSlogan: string = 'A SoulCode Academy é uma escola brasileira de inclusão digital. Nascemos durante a pandemia de 2020, com propósito de formar programadores e programadoras, através de metodologia ágil, baseada nas escolas de programação mais modernas e conceituadas da Europa e Estados Unidos, totalmente online, em português, e com todas as interações ao vivo.';
  callToAction: string = 'Mostrar destaques';
  oculto: boolean = true;
  classesBtn: string = "btn btn-primary";
  destaque: string[] = [
    "Uma Edtech brasileira, a SoulCode Academy é uma escola de inclusão digital, de metodologia ágil, com a missão de gerar impacto social, através da capacitação tecnológica, com foco em diversidade, equidade e empregabilidade."
  ]

  onToggle() {
    this.oculto = !this.oculto;

    if (this.oculto) {
      this.classesBtn = "btn btn-primary";
      this.callToAction = "Mostrar destaques";
    } else {
      this.classesBtn = "btn btn-danger";
      this.callToAction = "Ocultar destaques";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
}
