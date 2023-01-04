import {Component, Input} from '@angular/core';
import {ExpensesService} from "../../services/expenses.service";
import {Expense} from "../../models/Expense";
import {Router} from "@angular/router";

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {
  expenses!: Expense[];

  constructor(private expensesService: ExpensesService, private router: Router) {}

  ngOnInit(): void {
    this.expenses = this.expensesService.getAllExpenses();
  }

  onDeleteExpense(expectedExpense: Expense) {
    console.log('delete expense : ' + expectedExpense.id);
    this.expensesService.deleteExpenseById(expectedExpense.id);
  }

  onEditExpense(expectedExpense: Expense) {
    console.log('edit expense : ' + expectedExpense.id);
    this.router.navigateByUrl('edit-expense/'+expectedExpense.id);
  }

  onSortByCategory() {
    this.expenses = this.expensesService.sortByCategory();
  }

  onSortByDate() {
    this.expenses = this.expensesService.sortByDate();
  }

  onSortAlphabetically() {
    this.expenses = this.expensesService.sortAlphabetically();
  }
}
