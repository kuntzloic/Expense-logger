import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ExpensesService} from "../../services/expenses.service";
import {Expense} from "../../models/Expense";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.scss']
})
export class EditExpenseComponent {
  id!: number;
  expense!: Expense | null;
  expenseForm!: FormGroup;
  expensePreview$!: Observable<Expense>;
  categories!: Array<String>;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private expensesService: ExpensesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.expensesService.getExpenseById(this.id));
    this.expense = this.expensesService.getExpenseById(this.id);

    let getMonth = this.expense?.date.toLocaleString("default", { month: "2-digit" });
    let getDay = this.expense?.date.toLocaleString("default", { day: "2-digit" });
    let getYear = this.expense?.date.toLocaleString("default", { year: "numeric" });
    let today = getYear + "-" + getMonth + "-" + getDay;
    this.categories = this.expensesService.getCategoriesNames();
    this.expenseForm = this.formBuilder.group({
      title: [this.expense?.title, [Validators.required]],
      date: [today, [Validators.required]],
      amount: [this.expense?.amount, [Validators.pattern("^[0-9]+(\.[0-9]{1,2})?$"), Validators.required]],
      category: [this.expense?.category, [Validators.required]],
      description: [this.expense?.description],
    },{
      updateOn: 'change'
    });
    this.expensePreview$ = this.expenseForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
      }))
    );
    this.expenseForm.valueChanges.subscribe(formValue => {
      this.expense = {
        ...formValue,
      };
    });
  }

  onSubmitForm() {
    if(this.expenseForm.valid) {
      console.log(this.expense!.id);
      if(this.expenseForm.value.description == null) {
        this.expensesService.editExpense(this.id, this.expenseForm.value.title, new Date(this.expenseForm.value.date), (this.expenseForm.value.amount as number), this.expenseForm.value.category);
      }else {
        this.expensesService.editExpense(this.id, this.expenseForm.value.title, new Date(this.expenseForm.value.date), (this.expenseForm.value.amount as number), this.expenseForm.value.category, this.expenseForm.value.description);
      }
      this.router.navigateByUrl('/expenses');
    }
  }
}
