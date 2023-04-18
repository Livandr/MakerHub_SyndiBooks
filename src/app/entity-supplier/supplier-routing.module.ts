import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { SupplierUpdateComponent } from './supplier-update/supplier-update.component';


const routes: Routes = [{
  path: '', component: SupplierComponent,
  children: [
    { path: '', redirectTo: 'supplier-management', pathMatch: 'full' },
    { path: 'supplier-management', component: SupplierComponent },
    { path: 'details/:id', component: SupplierDetailsComponent },
    { path: 'update', component: SupplierUpdateComponent },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
