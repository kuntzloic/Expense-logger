import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Expense} from "../../models/Expense";
import {ExpensesService} from "../../services/expenses.service";

@Component({
  selector: 'app-sort-buttons',
  templateUrl: './sort-buttons.component.html',
  styleUrls: ['./sort-buttons.component.scss']
})
export class SortButtonsComponent {
  @Input() expenses!: Expense[];
  @Output() updateExpensesEvent = new EventEmitter<number>();

  constructor(private expensesService: ExpensesService) {}

  onSortByCategory() {
    this.expensesService.sortByCategory();
    this.updateExpensesEvent.emit();
  }

  onSortByDate() {
    this.expensesService.sortByDate();
    this.updateExpensesEvent.emit();
  }

  onSortAlphabetically() {
    this.expensesService.sortAlphabetically();
    this.updateExpensesEvent.emit();
  }

  onSortByPrice() {
    this.expensesService.sortByPrice();
    this.updateExpensesEvent.emit();
  }
}
