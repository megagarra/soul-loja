import { Injectable } from '@angular/core';
import { CategoriaProduto, Produto } from 'src/app/models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

 private produtos: Produto[] = [
    {
    imagem: 'https://seeklogo.com/images/A/angular-logo-B76B1CDE98-seeklogo.com.png',
    nomeDoProduto: "Angular.js",
    descricao: "Descrição",
    preco: 20.5,
    emPromocao: true,
    desconto: 0.1,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png',
    nomeDoProduto: "Java",
    descricao: "Descrição",
    preco: 20.5,
    emPromocao: true,
    desconto: 0.1,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png',
    nomeDoProduto: "Java",
    descricao: "Descrição",
    preco: 20.5,
    emPromocao: true,
    desconto: 0.1,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png',
    nomeDoProduto: "Java",
    descricao: "Descrição",
    preco: 20.5,
    emPromocao: true,
    desconto: 0.1,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png',
    nomeDoProduto: "Java",
    descricao: "Descrição",
    preco: 20.5,
    emPromocao: true,
    desconto: 0.1,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png',
    nomeDoProduto: "Java",
    descricao: "Descrição",
    preco: 20.5,
    emPromocao: true,
    desconto: 0.1,
    categoria: CategoriaProduto.ELETRO
  },



];

getProdutos(): Produto[]{
  return this.produtos;
}

  constructor() {  }



}
