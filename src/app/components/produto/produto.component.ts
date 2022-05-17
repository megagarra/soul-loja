import { Produto } from 'src/app/models/produto';
import { Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input('dadoProduto') produto!: Produto
  @Output('onCarrinho') onCarrinho = new EventEmitter<Produto>();

  precoDesconto(): number{
    return this.produto.preco - (this.produto.preco * this.produto.desconto);
  }

  constructor() { }

  onComprar(){
    alert("Produto adicionado no carrinho!");
    this.onCarrinho.emit(this.produto);
  }

  ngOnInit(): void {
  }

}
