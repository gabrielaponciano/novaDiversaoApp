import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'g1917',
    loadChildren: () => import('./filmes/g1917/g1917.module').then( m => m.G1917PageModule)
  },
  {
    path: 'o-poco',
    loadChildren: () => import('./filmes/o-poco/o-poco.module').then( m => m.OPocoPageModule)
  },
  {
    path: 'breaking-bad',
    loadChildren: () => import('./series/breaking-bad/breaking-bad.module').then( m => m.BreakingBadPageModule)
  },
  {
    path: 'atypical',
    loadChildren: () => import('./series/atypical/atypical.module').then( m => m.AtypicalPageModule)
  },
  {
    path: 'scooby-doo',
    loadChildren: () => import('./desenhos/scooby-doo/scooby-doo.module').then( m => m.ScoobyDooPageModule)
  },
  {
    path: 'tome-jerry',
    loadChildren: () => import('./desenhos/tome-jerry/tome-jerry.module').then( m => m.TomeJerryPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
