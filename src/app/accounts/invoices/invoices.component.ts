import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Invoice } from 'src/app/models/invoice';
import { INVOICE_REGISTER_FORM } from 'src/app/models/invoice-register';
import { Supplier } from 'src/app/models/supplier';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  invoice!: Invoice;
  invoices!: Invoice[];
  suppliers!: Supplier[];
  invoiceSub!: Subscription;
  form: FormGroup;
  loading: boolean = false;

  constructor(
    private readonly _invoiceService: InvoiceService,
    private _formBuilder: FormBuilder,
    private readonly _activatedRouter: ActivatedRoute,
    private _router: Router
  ) {
    this.form = _formBuilder.group(INVOICE_REGISTER_FORM)
  }

  //INITIALISATION
  ngOnInit(): void {
    const invoiceID = this._activatedRouter.snapshot.params['id'];
    this.loading = true;

    //souscription à l'observable pour être notifié des nouvelles valeurs et des nouvelles erreurs
    this.invoiceSub = this._invoiceService.$invoiceChanged.subscribe(() => this.loadInvoices())

    this._invoiceService.getDetails(invoiceID).subscribe({
      next: (invoice) => {
        this.invoice = invoice;
        this.loading = false;
      },
      error: (err) => {
        this._router.navigate(['/invoice']);
      }
    })

  }


  loadInvoices() {
    this._invoiceService.getAll().subscribe({
      next: data => this.invoices = data,
    })
  }

}





