import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ExpensesService} from "../../services/expenses.service";
import {Expense, ExpenseType} from "../../models/Expense";
import {map, Observable} from "rxjs";

@Component({
  selector: 'new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.scss']
})
export class NewExpenseComponent {
  expenseForm!: FormGroup;
  expensePreview$!: Observable<Expense>;
  categories!: Array<String>;
  expense!: Expense;

  constructor(private formBuilder: FormBuilder,
              private expensesService: ExpensesService,
              private router: Router) { }

  ngOnInit(): void {
    let date = new Date();
    let getMonth = date.toLocaleString("default", { month: "2-digit" });
    let getDay = date.toLocaleString("default", { day: "2-digit" });
    let getYear = date.toLocaleString("default", { year: "numeric" });
    let today = getYear + "-" + getMonth + "-" + getDay;
    this.categories = this.expensesService.getCategoriesNames();
    this.expenseForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      date: [today, [Validators.required]],
      amount: [0.01, [Validators.pattern("^[0-9]+(\.[0-9]{1,2})?$"), Validators.required]],
      category: [ExpenseType.OTHER, [Validators.required]],
      description: [null],
    },{
      updateOn: 'change'
    });
    this.expensePreview$ = this.expenseForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        id: this.expensesService.getAvailableId(),
      }))
    );
    this.expenseForm.valueChanges.subscribe(formValue => {
      this.expense = {
        ...formValue,
        id: this.expensesService.getAvailableId(),
      };
    });
  }

  onSubmitForm() {
    if(this.expenseForm.valid) {
      if(this.expenseForm.value.description == null) {
        this.expensesService.addExpense(this.expenseForm.value.title, new Date(this.expenseForm.value.date), (this.expenseForm.value.amount as number), this.expenseForm.value.category);
      }else {
        this.expensesService.addExpense(this.expenseForm.value.title, new Date(this.expenseForm.value.date), (this.expenseForm.value.amount as number), this.expenseForm.value.category, this.expenseForm.value.description);
      }
      this.router.navigateByUrl('/expenses');
    }
  }
}
