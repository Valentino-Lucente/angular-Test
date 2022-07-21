import { Data } from "@angular/router";

export class ArticoloUfficio {
    nomeArticolo: string | undefined;
    tipologia: string | undefined;
    idArticolo: number | undefined;
    prezzo: number | undefined;
    quantita: number | undefined;
    numeroVendite!: number;
    dataUpload!: string;
    recensioni: string | undefined;
    voto: number | undefined;
    immagine: string | undefined;
}

