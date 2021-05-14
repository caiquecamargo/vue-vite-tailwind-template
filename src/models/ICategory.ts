import { IImage } from "./IImage";
import { IProduct } from "./IProduct";

export interface ICategory {
  id: number,
  nome: string,
  background: IImage,
  produtos: IProduct[],
  descricao: string,
}