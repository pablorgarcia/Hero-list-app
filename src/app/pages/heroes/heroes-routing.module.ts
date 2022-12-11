import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeListComponent } from 'src/app/components/heroe-list/heroe-list.component';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    children: [
      {
        path: '',
        component: HeroeListComponent
      },
      {
        path: 'detail/:id',
        loadChildren: () => import('./heroe-detail/heroe-detail.module').then(m => m.HeroeDetailModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./heroes-form/heroes-form.module').then(m => m.HeroesFormModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./heroes-form/heroes-form.module').then(m => m.HeroesFormModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
