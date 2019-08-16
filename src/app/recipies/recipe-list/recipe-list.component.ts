import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe('A Test Recipe', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 'https://picsum.photos/id/1/250/200'),
    new Recipe('A Test Recipe', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 'https://picsum.photos/id/1/250/200')
  ];
l
  constructor() { }

  ngOnInit() {
  }

}
