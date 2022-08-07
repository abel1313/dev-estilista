import { ISuper } from "src/app/models/ISuper.mode";
import { ITamanioProducto } from "./ITamanioProducto.model";


export interface IProducto extends ISuper{

    nombreProducto: string;
    tipoPieza: ITamanioProducto;
}