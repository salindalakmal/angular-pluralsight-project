import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipies: Recipe[] = [
    new Recipe('A Test Recipe', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 'https://picsum.photos/id/1/250/200'),
    new Recipe('A Test Recipe 2', 'Lorem ipsum dolor sit2, amet consectetur adipisicing elit.', 'https://picsum.photos/id/1/250/200')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }

}
