import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountingService } from 'src/app/services/accounting.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // La liste des définitions des widgets 
  // public $widgetList: Observable<WidgetDefinition<unknown>[]> | undefined;

  constructor(
    private readonly _accountingService: AccountingService
  ) {
  }

  ngOnInit(): void {
    // this.$widgetList = this._accountingService.getWidgets();
  }

}
