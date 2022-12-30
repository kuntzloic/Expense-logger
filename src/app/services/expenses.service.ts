import {Injectable} from '@angular/core';
import {Expense, ExpenseType} from "../models/Expense";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  expenses: Expense[] = [
    {
      id: 1,
      title: 'Boulangerie',
      date: new Date(),
      amount: 10,
      category: ExpenseType.FOOD,
      description: 'Bread, Croissants and Butter'
    },
    {id: 2, title: 'Bus', date: new Date(), amount: 4.79, category: ExpenseType.TRANSPORT, description: 'Bus ticket'},
    {id: 3, title: 'Cinema Strange World', date: new Date(), amount: 12.50, category: ExpenseType.ENTERTAINMENT},
    {
      id: 4,
      title: 'Supermarket',
      date: new Date(),
      amount: 50.99,
      category: ExpenseType.FOOD,
      description: 'Food for the week'
    },
    {
      id: 5,
      title: 'Train',
      date: new Date(),
      amount: 17.85,
      category: ExpenseType.TRANSPORT,
      description: 'Train ticket'
    },
    {
      id: 6,
      title: 'Cinema Avatar 2',
      date: new Date(),
      amount: 12.50,
      category: ExpenseType.ENTERTAINMENT,
      description: 'Movie ticket'
    },
    {
      id: 7,
      title: 'T-Shirt',
      date: new Date(),
      amount: 23.50,
      category: ExpenseType.CLOTHES,
      description: 'T-Shirt OBEY'
    },
    {
      id: 8,
      title: 'T-Shirt',
      date: new Date(),
      amount: 20.98,
      category: ExpenseType.CLOTHES,
      description: 'T-Shirt DC Comics'
    },
    {
      id: 9,
      title: 'Paracetamol',
      date: new Date(),
      amount: 4.99,
      category: ExpenseType.HEALTH,
    },
    {
      id: 10,
      title: 'Paint',
      date: new Date(),
      amount: 78.49,
      category: ExpenseType.HOUSING,
    },
    {
      id: 11,
      title: 'Secret Santa',
      date: new Date(),
      amount: 10,
      category: ExpenseType.OTHER,
    }
  ];

  getExpenseTotalAmount(): number {
    let totalAmount = 0;
    this.expenses.forEach(expense => totalAmount += expense.amount);
    return totalAmount;
  }

  getAllExpenses(): Expense[] {
    return this.expenses;
  }

  getExpensesByCategories(): Map<ExpenseType, number> {
    const expensesByCategories = new Map<ExpenseType, number>();
    this.expenses.forEach(expense => {
      const amount = expensesByCategories.get(expense.category);
      if (amount) {
        expensesByCategories.set(expense.category, amount + expense.amount);
      } else {
        expensesByCategories.set(expense.category, expense.amount);
      }
    });
    return expensesByCategories;
  }

  getThreeLastExpenses(): Expense[] {
    return this.expenses.slice(-3);
  }

  getExpenseById(id: number): Expense {
    const expense = this.expenses.find(expense => expense.id === id);
    if (expense) {
      return expense;
    } else {
      throw new Error('Expense not found');
    }
  }

  deleteExpenseById(id: number) {
    const expenseIndex = this.expenses.findIndex(expense => expense.id === id);
    if (expenseIndex !== -1) {
      this.expenses.splice(expenseIndex, 1);
    } else {
      throw new Error('Expense not found');
    }
  }
}
