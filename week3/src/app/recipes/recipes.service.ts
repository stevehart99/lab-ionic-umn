import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://i1.wp.com/resepkoki.id/wp-content/uploads/2016/12/Resep-Gado-Gado.jpg?fit=2461%2C2359&ssl=1',
      ingredients: ['Lontong', 'Sawi', 'Bumbu kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl: 'https://taupedia.com/wp-content/uploads/2019/06/1.jpeg',
      ingredients: ['Beras', 'Air putih', 'Garam', 'Daun pandan']
    },
    {
      id: 'r3',
      title: 'Pizza Margerita',
      imageUrl: 'https://images.ricardocuisine.com/services/recipes/500x675_pizza.jpg?_ga=2.55323115.1587949918.1566980114-1106606787.1566980114',
      ingredients: ['Tepung terigu', 'Ragi instan', 'Gula pasir', 'Air hangat', 'Minyak zaitun', 'Saus tomat', 'Keju mozarella']
    }
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
