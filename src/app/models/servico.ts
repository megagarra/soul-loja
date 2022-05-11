export interface Servico {
  imagem: string;
  nomeDoServico: string;
  descricaoDoServico: string;
  categoria: CategoriaServico;
}

export enum CategoriaServico{
  MENTORIA = 'Mentoria',
  SERMAIS = 'Ser+',
  LINGOPASS = 'Inglês'

}
