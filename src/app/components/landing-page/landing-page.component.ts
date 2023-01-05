import {Component} from '@angular/core';
import {Expense, ExpenseType} from "../../models/Expense";
import {ExpensesService} from "../../services/expenses.service";

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  expensesByCategories!: Map<ExpenseType, number>;
  totalAmount!: number;
  amountThisMonth!: number;

  constructor(private expensesService: ExpensesService) {
    this.updateExpenses();
  }

  updateExpenses() {
    this.expensesByCategories = this.expensesService.getExpensesByCategories();
    this.totalAmount = this.expensesService.getExpenseTotalAmount();
    this.amountThisMonth = this.expensesService.getExpenseTotalAmountThisMonth();
  }
}

