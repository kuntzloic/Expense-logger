import {Component, Input} from '@angular/core';
import {Expense} from "../../models/Expense";
import {ExpensesService} from "../../services/expenses.service";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent {

  @Input() expense!: Expense;

  constructor(private expensesService: ExpensesService) {}

}
