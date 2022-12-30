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

  colorForExpenseType(category: string) {
    switch (category) {
      case ExpenseType.FOOD:
        return '#F44336';
      case ExpenseType.CLOTHES:
        return '#E91E63';
      case ExpenseType.ENTERTAINMENT:
        return '#ffd711';
      case ExpenseType.TRANSPORT:
        return '#149450';
      case ExpenseType.HOUSING:
        return '#FF9800';
      case ExpenseType.HEALTH:
        return '#0077ff';
      case ExpenseType.OTHER:
        return '#607D8B';
      default:
        return '#919191';
    }
  }

  ngOnInit(): void {
    this.expensesByCategories = this.expensesService.getExpensesByCategories();
    this.totalAmount = this.expensesService.getExpenseTotalAmount();
    console.log(this.expensesByCategories);
  }
}
