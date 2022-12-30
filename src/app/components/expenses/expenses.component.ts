import { Component } from '@angular/core';
import {ExpensesService} from "../../services/expenses.service";
import {Expense} from "../../models/Expense";

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {
  expenses!: Expense[];

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.expenses = this.expensesService.getAllExpenses();
  }

  deleteExpense(expense: Expense) {
    console.log('delete expense : ' + expense.id);
    this.expensesService.deleteExpenseById(expense.id);
  }
}
