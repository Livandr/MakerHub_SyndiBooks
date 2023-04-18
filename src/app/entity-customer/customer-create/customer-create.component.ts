import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoOwnership } from 'src/app/models/co-ownership';
import { CUSTOMER_FORM } from 'src/app/models/customer-form';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  form: FormGroup;
  customers!: CoOwnership[];
  loading: boolean = false;
  customerSub!: Subscription;

  constructor(
    private readonly _customerService: CustomerService,
    private _builder: FormBuilder,
    private readonly _activatedRouter: ActivatedRoute,
    private _router: Router
  ) {
    this.form = _builder.group(CUSTOMER_FORM);
  }

  ngOnInit(): void {
    const customerID = this._activatedRouter.snapshot.params['id'];

    this.loading = true;

    this.customerSub = this._customerService.$customerChanged.subscribe(() => this.loadCustomers)
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

  loadCustomers() {
    this._customerService.getAll().subscribe({
      next: data => this.customers = data,
    })
  }

  hasErrorAndTouched(form: FormGroup, coOName: string, validator: string) {
    return form.get(coOName)?.hasError(validator)
      && (form.get(coOName)?.touched || form.get(coOName)?.dirty);
  }

}
