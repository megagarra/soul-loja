import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-data-binding',
  templateUrl: './teste-data-binding.component.html',
  styleUrls: ['./teste-data-binding.component.css']
})
export class TesteDataBindingComponent implements OnInit {
  nome: string = 'José';
  imagem: string = 'https://i.picsum.photos/id/953/400/400.jpg?hmac=sCGl1xt9pdRyzGnhO5N_HVo_bObR1VVbUitw72cZ7K4';
  batata: number = 30;
  link: string = 'https://soulcodeacademy.org/';
  labelLink: string = 'Acesse a Soulcode!';

  hoje: Date = new Date();
  procentagem: number = 0.4;
  numero: number = 45.4;
  vamor: number = 0.4234343;
  mensagem: string = "Olá tudo bem?"


  constructor() { }

  agora: Date = new Date();
  idInterval?: any;

  array: number [] = [10,20,30];

  addArray(){
    this.array.push(1)
      }



  onAumentarAltura() {
    this.batata += 25;
  }

  onDiminuirAltura() {
    this.batata -= 25;
  }

  onLimpar() {
    this.labelLink = '';
  }

  ngOnInit(): void {
    this.idInterval = setInterval(() => {
      this.agora = new Date()
    }, 1000);
  }

  ngOnDestroy(): void{
    clearInterval(this.idInterval);
  }

}
