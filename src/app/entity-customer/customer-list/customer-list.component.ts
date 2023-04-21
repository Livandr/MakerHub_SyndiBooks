import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoOwnership } from 'src/app/models/co-ownership';
import { CUSTOMER_FORM } from 'src/app/models/customer-form';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  coownership!: CoOwnership;
  coownerships!: CoOwnership[];
  isLoading: boolean = false;
  customerSub!: Subscription;
  form: FormGroup;
  customers!: CoOwnership[];

  constructor(
    private readonly _customerService: CustomerService,
    private _builder: FormBuilder,
    private _router: Router,

  ) { this.form = _builder.group(CUSTOMER_FORM) }

  ngOnInit(): void {
    this.isLoading = true;

    this._customerService.getAll().subscribe({
      next: (coownerships) => {
        this.coownerships = coownerships;
        this.isLoading = false;

      }
    })

    this.customerSub = this._customerService.$customerChanged.subscribe(() => this.loadCustomers())
  }

  loadCustomers(): void {
    this.isLoading = true;

    this._customerService.getAll().subscribe({
      next: data => this.coownerships = data,
      error: console.error
    })
  }

  updateCustomer() { }

  deleteCustomer(customer: CoOwnership) {
    this._customerService.delete(customer).subscribe(() => {
      this.coownerships = this.coownerships.filter(custom => custom.id !== custom.id);
    })
  }

  onSubmit() {

    if (this.form.valid) {
      this._customerService.create(this.form.value).subscribe({
        next: (newCustomer) => {
          this._router.navigate(['/customer/list'], newCustomer);
        },
        error: (err) => {
          console.log("error");
        },
      })
    }
  }

  hasErrorAndTouched(form: FormGroup, coOName: string, validator: string) {
    return form.get(coOName)?.hasError(validator)
      && (form.get(coOName)?.touched || form.get(coOName)?.dirty);
  }

}

