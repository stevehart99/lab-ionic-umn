import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ukm', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
