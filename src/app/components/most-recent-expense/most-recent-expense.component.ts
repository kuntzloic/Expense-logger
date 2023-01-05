import {Component, EventEmitter, Output} from '@angular/core';
import {Expense, ExpenseType} from "../../models/Expense";
import {ExpensesService} from "../../services/expenses.service";

@Component({
  selector: 'app-most-recent-expense',
  templateUrl: './most-recent-expense.component.html',
  styleUrls: ['./most-recent-expense.component.scss']
})
export class MostRecentExpenseComponent {
  expense!: Expense;

  @Output() updateExpensesEvent = new EventEmitter<number>();

  constructor(private expensesService: ExpensesService) {
  }

  ngOnInit(): void {
    this.expense = this.expensesService.getLastExpense();
  }

  updateExpenses() {
    this.updateExpensesEvent.emit();
    this.expense = this.expensesService.getLastExpense();
  }
}
