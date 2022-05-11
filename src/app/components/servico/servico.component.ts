import { CategoriaServico } from './../../models/servico';
import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/models/servico';




@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})



export class ServicoComponent implements OnInit {

  servico: Servico = {
    imagem: 'https://fix.com.br/wp-content/uploads/2021/01/Letra-roxa-icone-roxo-15.png',
    nomeDoServico: "BootCamp",
    descricaoDoServico: "Venha para o nosso Bootcamp",
    categoria: CategoriaServico.MENTORIA
  }


  constructor() { }

  ngOnInit(): void {
  }

}
