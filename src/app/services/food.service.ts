import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }
//Metodo che permette di fare la ricerca senza preoccuparsi delle lettere maiuscole o minuscole
  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getFoodById(foodId:string):Food{
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }

}
