import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {NewExpenseComponent} from "./components/new-expense/new-expense.component";
import {ExpensesComponent} from "./components/expenses/expenses.component";
import {EditExpenseComponent} from "./components/edit-expense/edit-expense.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'new-expense', component: NewExpenseComponent},
  { path: 'edit-expense/:id', component: EditExpenseComponent},
  { path: 'expenses', component: ExpensesComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
