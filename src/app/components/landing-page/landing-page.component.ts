import {Component} from '@angular/core';
import {Expense, ExpenseType} from "../../models/Expense";
import {ExpensesService} from "../../services/expenses.service";

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  public expense: Expense;

  constructor(private expensesService: ExpensesService) {
    this.expense = new Expense(1, 'test', new Date(), 3, ExpenseType.OTHER, 'test');
  }

  ngOnInit(): void {
    this.expense = this.expensesService.getLastExpense();
  }
}

