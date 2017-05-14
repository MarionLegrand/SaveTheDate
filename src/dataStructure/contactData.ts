import { canal } from "./canal";

export class contactData {
    id?:number;
    nom:string;
    prenom:string;
    canaux:canal[] | canal;
}