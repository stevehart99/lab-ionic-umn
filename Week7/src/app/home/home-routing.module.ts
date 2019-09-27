import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'tabs',
        component: HomePage,
        children: [
            {
                path: 'ukm',
                children: [
                    {
                        path: '',
                        loadChildren: './ukm/ukm.module#UkmPageModule'
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: './profile/profile.module#ProfilePageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/tabs/ukm',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
