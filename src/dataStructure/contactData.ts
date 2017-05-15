import { canal } from "./canal";
import {Tag} from "./tag";

export class contactData {
    id?:number;
    nom:string;
    prenom:string;
    canaux?:canal[] | canal;
    tags?: Tag[] | Tag;
}