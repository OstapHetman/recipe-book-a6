import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeStartComponent } from "../recipes/recipe-start/recipe-start.component";
import { RecipeDetailsComponent } from "../recipes/recipe-details/recipe-details.component";
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { AuthGuard } from "../auth/auth-guard.service";

const recipesRoutes: Routes = [
    { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
        { path: ':id', component: RecipeDetailsComponent },
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
    ] }
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class RecipesRoutingModule {}