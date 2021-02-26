import {Imprimivel} from './Imprimivel';
import {Igualavel} from './Igualavel';

export interface Generico<T> extends Imprimivel, Igualavel<T> {
    
}