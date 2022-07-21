//Formattazione del json degli elementi da visualizzare
export class Food{
  id!:string;
  name!:string;
  price!:number;
  tags?: string[];
  favorite!:boolean;
  stars!: number;
  imageUrl!: string;
  origins!: string[];
  cookTime!:string;
}
