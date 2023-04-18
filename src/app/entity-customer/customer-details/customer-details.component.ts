import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoOwnership } from 'src/app/models/co-ownership';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  coownership!: CoOwnership;
  loading: boolean = false;

  constructor(
    private readonly _customerService: CustomerService,
    private readonly _activatedRouter: ActivatedRoute,
    private readonly _router: Router,
  ) { }

  ngOnInit(): void {
    const coownershipID = this._activatedRouter.snapshot.params['id'];

    this.loading = true;

    this._customerService.getOne(coownershipID).subscribe({
      next: (coownership) => {
        this.coownership = coownership;
        this.loading = false;
      },
      error: (err) => { this._router.navigate(['/customers/list']) }
    })
  }

  delete() {
    this._customerService.delete(this.coownership).subscribe({
      next: () => {
        this._router.navigate(['/customers/list']);
      },
      error: () => {
        console.log("ipossible");
      }
    })
  }


}
