import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-total-expenses-widget',
  templateUrl: './total-expenses-widget.component.html',
  styleUrls: ['./total-expenses-widget.component.scss']
})
export class TotalExpensesWidgetComponent {
  @Input() totalAmount?: number;
  @Input() amountThisMonth?: number;

  constructor() { }

}
