import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitsComponent} from './produits/produits.component';
import {AddProductComponent} from './add-product/add-product.component';

const routes: Routes = [{
  path : 'products' , component : ProduitsComponent
},
  {path : 'add-product' , component : AddProductComponent },
  {path : '', redirectTo: '/products' , pathMatch : 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
