import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SupplierService } from 'src/app/services/supplier.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SupplierContainerComponent } from './supplier-container/supplier-container.component';

@NgModule({
  declarations: [
    SupplierComponent,
    SupplierDetailsComponent,
    SupplierContainerComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SupplierService,
  ]
})
export class SupplierModule { }
