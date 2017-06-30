import {Figurine} from "../../figurines/shared/figurine";
import {Army} from "../../army/shared/army";
export class Unit {
    description: string;
    equipementPointInclude: boolean;
    figurines: Figurine[];
    id: number;
    nom: string;
    typeFigurine: string;
    army: Army;
}

