import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(
        private http: Http,
        private recipeService: RecipeService,
        private authSerive: AuthService
    ) { }

    storeRecipes() {
        const token = this.authSerive.getToken();
        return this.http.put(`https://recipe-book-6e2ff.firebaseio.com/recipes.json?auth=${token}`, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authSerive.getToken();
        this.http.get(`https://recipe-book-6e2ff.firebaseio.com/recipes.json?auth=${token}`)
        .pipe(map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        ))
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}