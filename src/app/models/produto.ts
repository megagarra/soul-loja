

export interface Produto {
  imagem: string;
  nomeDoProduto: string;
  descricao: string;
  preco: number;
  emPromocao: boolean;
  desconto: number;
  categoria: CategoriaProduto.ELETRO;
}

export enum CategoriaProduto{
  ELETRO = 'eletro',
  MOVEIS = 'moveis',
  LIMPEZA = 'limpeza'
}
