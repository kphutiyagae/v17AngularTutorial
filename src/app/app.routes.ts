import { Routes } from '@angular/router';
import {BattleComponent} from "./pages/battle/battle.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./pages/home/home.component";

export const routes: Routes = [
    {
        path: 'battle',
        pathMatch: 'full',
        component: BattleComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];
