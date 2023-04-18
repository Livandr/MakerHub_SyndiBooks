import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.scss']
})
export class SupplierDetailsComponent implements OnInit {
  supplier!: Supplier;
  loading: boolean = false;

  constructor(
    private readonly _supplierService: SupplierService,
    private readonly _activatedRouter: ActivatedRoute,
    private readonly _router: Router,
  ) { }

  ngOnInit() {
    const supplierId = this._activatedRouter.snapshot.params['supplierId'];

    this.loading = true;

    this._supplierService.getOne(supplierId).subscribe({
      next: (suppl) => {
        this.supplier = suppl;
        this.loading = false;
      },
      error: (err) => {
        this._router.navigate(['/supplier']);
      }
    })
  }


}
