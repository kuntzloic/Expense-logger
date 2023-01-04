import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Expense} from "../../models/Expense";
import {ExpensesService} from "../../services/expenses.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent {

  @Input() expense!: Expense;
  @Output() updateExpensesEvent = new EventEmitter<number>();

  constructor(private expensesService: ExpensesService, private router: Router) {}

  onDeleteExpense() {
    this.expensesService.deleteExpenseById(this.expense.id);
    this.updateExpensesEvent.emit();
  }

  onEditExpense() {
    this.router.navigateByUrl('edit-expense/'+ this.expense.id);
  }
}
