import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoOwnership } from 'src/app/models/co-ownership';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // Variable
  coownerships: CoOwnership[] = [];
  selectedCoOwnership!: any;
  acp?: string;

  // Service
  constructor(
    private http: HttpClient,
    private readonly _customerService: CustomerService,
    // private _router: Router,
  ) { }


  // INITIALISATION DE LA LISTE DES ACP 
  ngOnInit(): void {
    this._customerService.getAll().subscribe((data) => this.coownerships = data);
  }

  searchACP() {
    //appel de l'API REST pour récupérer la liste des copropriétés
    this.http.get<CoOwnership[]>('http://localhost:8080/coOwnerships/search/findByIdOrCoOwnershipName?name=' + this.acp)
      .subscribe(data => this.coownerships = data);

  }

  goToThisOwnership() {
    // this._router.navigate(['/coownership', this.selectedCoOwnership]);
  }




}
