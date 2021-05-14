import { ICategory } from "./ICategory";
import { IImage } from "./IImage";

export interface IProduct {
  id: number;
  nome: string;
  marca: string;
  preco: number;
  unidade: string;
  descricao: string;
  mostrar_produto: boolean;
  imagem_principal: IImage;
  background: IImage;
  imagens: IImage[];
  categorias: ICategory[];
}
