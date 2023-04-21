import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Supplier } from 'src/app/models/supplier';
import { SUPPLIER_FORM } from 'src/app/models/supplier-form';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  supplier!: Supplier;
  suppliers!: Supplier[];
  isLoading: boolean = false;
  supplierSub!: Subscription;

  form: FormGroup;



  constructor(
    private readonly _supplierService: SupplierService,
    private _formBuilder: FormBuilder,
    private readonly _activatedRouter: ActivatedRoute,
    private _router: Router

  ) { this.form = _formBuilder.group(SUPPLIER_FORM) }

  //INITIALISATION
  ngOnInit(): void {

    this.isLoading = true;

    //souscription à l'observable pour être notifié des nouvelles valeurs et des nouvelles erreurs
    this.supplierSub = this._supplierService.$supplierChanged.subscribe(() => this.loadSuppliers());

  }


  onSubmit() {
    //si le formulaire est valide
    if (this.form.valid) {
      this._supplierService.create(this.form.value).subscribe({
        next: (newSupplier) => {

          //recharge de la page
          this._router.navigate(['/supplier/supplier-management', newSupplier]);
          this.form.reset();

        },
        error: (err) => {
          console.log("error");
        }
      })
    }
  }


  //MISE A JOUR DE LA LISTE DES REQUETES ET GESTION DE ERREURS
  loadSuppliers() {
    this._supplierService.getAll().subscribe({
      next: data => this.suppliers = data,
    })
  }




  // updateSupplier(supplierID: number) {
  //   this._supplierService.update(supplierID);
  // }

  deleteSupplier(supplier: Supplier) {
    this._supplierService.delete(supplier).subscribe(
      () => {
        this.loadSuppliers();
      }
    );
  }

  /**
   * 
   * Méthode me permettan de savoir si input possède une erreur et si il à déjà été touché
   * @param form le formulaire en question
   * @param supplierName l'input qu'on doit vérifier
   * @param validator le nom du validator à tester
   */

  hasErrorAndTouched(form: FormGroup, supplierName: string, validator: string) {
    return form.get(supplierName)?.hasError(validator)
      && (form.get(supplierName)?.touched || form.get(supplierName)?.dirty);
  }
}






