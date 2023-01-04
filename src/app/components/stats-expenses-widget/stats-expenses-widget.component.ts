import {Component, Input} from '@angular/core';
import {ExpensesService} from "../../services/expenses.service";
import {ExpenseType} from "../../models/Expense";

@Component({
  selector: 'app-stats-expenses-widget',
  templateUrl: './stats-expenses-widget.component.html',
  styleUrls: ['./stats-expenses-widget.component.scss']
})
export class StatsExpensesWidgetComponent {
  constructor(private expensesService: ExpensesService) {
  }

  @Input() expensesByCategories!: Map<ExpenseType, number>;
  @Input() totalAmount?: number;

  ngOnInit(): void {
  }
}
