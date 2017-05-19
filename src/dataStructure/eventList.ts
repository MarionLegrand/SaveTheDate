/*
    Infos de bases pour afficher dans une liste 
*/
export class EventAbstract{
    id:number;
    intitule:string;
   // lieu:string;
    dateDebut:string;
    etat:string;
    codePostal:string;
    complement?:string;
    appartement:string;
    ville:string;
}

/*
    partagé dans accueil et son provider 
    + dans listEvenement qui regroupe les événements passés 
*/