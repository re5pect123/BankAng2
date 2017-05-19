import { Routes } from '@angular/router';

import { CircularComponent } from "app/circular/circular.component";
import { SearchComponent } from "app/search/search.component";
import { UserComponent } from 'app/user/user.component';

export const appRoutes: Routes = [
    {
        path: 'circular',
        component: CircularComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'user/:userId',
        component: UserComponent
    }
];