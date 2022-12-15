import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgmDashboardComponent } from './views/ngm-dashboard/ngm-dashboard.component';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
},
{
    path: 'home',
    component: NgmDashboardComponent
},
{
    path: 'product',
    loadComponent: () => import('./product/product.component')
        .then(m => m.ProductComponent)
},
{
    path: '**',
    component: PagenotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
