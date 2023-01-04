import {Component} from '@angular/core';
import {ExpensesService} from "../../services/expenses.service";
import {Expense, ExpenseType} from "../../models/Expense";

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {
  expenses!: Expense[];
  expensesByCategories!: Map<ExpenseType, number>;
  totalAmount!: number;
  amountThisMonth!: number;

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.updateExpenses();
  }

  updateExpenses() {
    this.expensesByCategories = this.expensesService.getExpensesByCategories();
    this.totalAmount = this.expensesService.getExpenseTotalAmount();
    this.expenses = this.expensesService.getAllExpenses();
    this.amountThisMonth = this.expensesService.getExpenseTotalAmountThisMonth();
  }
}
