import { Routes } from '@angular/router';

import { CircularComponent } from "app/circular/circular.component";
import { SearchComponent } from "app/search/search.component";

export const appRoutes: Routes = [
    {
        path: 'circular',
        component: CircularComponent
    },
    {
        path: 'search',
        component: SearchComponent
    }
];