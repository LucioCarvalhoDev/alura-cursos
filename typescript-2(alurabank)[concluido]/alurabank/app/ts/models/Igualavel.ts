import { Negociacao } from "./Negociacao";

export interface Igualavel<T>{
    ehIgual(objeto: T):boolean  
}