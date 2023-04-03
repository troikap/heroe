import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHeroeComponent } from './heroe/list-heroe/list-heroe.component';
import { AddEditHeroeComponent } from './heroe/add-edit-heroe/add-edit-heroe.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'list-heroe',
    component: ListHeroeComponent
    // loadChildren: () => import('./heroe/list-heroe/list-heroe.module').then( m => m.ListHeroeModule)
  },
  {
    path: 'add-edit-heroe',
    component: AddEditHeroeComponent
    // loadChildren: () => import('./heroe/edit-heroe/edit-heroe.module').then( m => m.EditHeroeModule)
  },
  {
    path: '',
    redirectTo: '/list-heroe',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
