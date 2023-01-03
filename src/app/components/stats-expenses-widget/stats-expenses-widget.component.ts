import {Component} from '@angular/core';
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

  expensesByCategories?: Map<ExpenseType, number>;
  totalAmount?: number;

  ngOnInit(): void {
    this.expensesByCategories = this.expensesService.getExpensesByCategories();
    this.totalAmount = this.expensesService.getExpenseTotalAmount();
  }
}
