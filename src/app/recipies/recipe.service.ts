import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list-service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipies: Recipe[] = [
    new Recipe('A Test Recipe', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 'https://picsum.photos/id/1/250/200', [
      new Ingredient('Meat', 1),
      new Ingredient('French Frices', 20),
    ]),
    new Recipe('A Test Recipe 2', 'Lorem ipsum dolor sit2, amet consectetur adipisicing elit.', 'https://picsum.photos/id/1/250/200', [
      new Ingredient('Buns', 1),
      new Ingredient('Eggs', 10),
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipies() {
    return this.recipies.slice();
  }

  AddIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
