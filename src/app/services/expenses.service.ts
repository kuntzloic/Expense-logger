import {Injectable} from '@angular/core';
import {Expense, ExpenseType} from "../models/Expense";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  constructor(private router: Router) {
  }

  expenses: Expense[] = [
    {
      id: 1,
      title: 'Boulangerie',
      date: new Date(),
      amount: 5.70,
      category: ExpenseType.FOOD,
      description: '3 Croissants et deux pains au chocolat'
    },
    {id: 2, title: 'Bus', date: new Date(), amount: 4.79, category: ExpenseType.TRANSPORT, description: 'Ticket de Bus Marseille - Argelès'},
    {
      id: 3,
      title: 'Cinema',
      date: new Date(),
      amount: 12.50,
      category: ExpenseType.ENTERTAINMENT,
      description: 'Titanic (Rediffusion)'
    },
    {
      id: 4,
      title: 'Supermarché',
      date: new Date(),
      amount: 50.99,
      category: ExpenseType.FOOD,
      description: 'Courses de la semaine'
    },
    {
      id: 5,
      title: 'Train',
      date: new Date(),
      amount: 57.99,
      category: ExpenseType.TRANSPORT,
      description: 'Ticket Paris - Lyon'
    },
    {
      id: 6,
      title: 'Cinema',
      date: new Date(),
      amount: 14.50,
      category: ExpenseType.ENTERTAINMENT,
      description: 'Avatar 2 - 3D'
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
      title: 'Peinture',
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
      description: "Cadeau pour le Secret Santa de l'entreprise"
    }
  ];

  getAvailableId(): number {
    let maxId = 0;
    this.expenses.forEach(expense => {
      if (expense.id > maxId) {
        maxId = expense.id;
      }
    });
    return maxId + 1;
  }

  getCategoriesNames(): string[] {
    return Object.values(ExpenseType);
  }

  getExpenseTotalAmount(): number {
    let totalAmount = 0;
    this.expenses.forEach(expense => totalAmount += expense.amount);
    return totalAmount;
  }

  getAllExpenses(): Expense[] {
    return this.expenses;
  }

  updateAllExpenses() {
    const expensesByCategories = new Map<ExpenseType, number>();
    this.expenses.forEach(expense => {
      const amount = expensesByCategories.get(expense.category);
      if (amount) {
        expensesByCategories.set(expense.category, amount + expense.amount);
      } else {
        expensesByCategories.set(expense.category, expense.amount);
      }
    });
  }

  getLastExpense(): Expense {
    return this.expenses[this.expenses.length - 1];
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

  getExpenseById(id: number): Expense | null {
    const expense = this.expenses.find(expense => expense.id == id);
    if (expense) {
      return expense;
    } else {
      return null;
    }
  }

  deleteExpenseById(id: number) {
    const expenseIndex = this.expenses.findIndex(expense => expense.id === id);
    if (expenseIndex !== -1) {
      this.expenses.splice(expenseIndex, 1);
      console.log('Expense deleted');
    } else {
      throw new Error('Expense not found');
    }
  }

  addExpense(title: string, date: Date, amount: number, category: ExpenseType, description?: string) {
    if (description) {
      this.expenses.push({id: this.getAvailableId(), title, date, amount, category, description});
    } else {
      this.expenses.push({id: this.getAvailableId(), title, date, amount, category});
    }
  }

  editExpense(id: number, title: string, date: Date, amount: number, category: ExpenseType, description?: string) {
    const expense = this.getExpenseById(id);
    if (expense != null) {
      const index = this.expenses.indexOf(expense);
      expense.title = title;
      expense.date = date;
      expense.amount = amount;
      expense.category = category;
      expense.description = description;

      this.expenses[index] = expense;
    } else {
      throw new Error('Expense not found');
    }
  }

  sortByDate() {
    let expensesToSort = this.expenses.concat(); // Clone the array
    expensesToSort.sort((a, b) => {
        return a.date.getTime() - b.date.getTime();
      }
    );
    return expensesToSort;
  }

  sortByCategory() {
    let expensesToSort = this.expenses.concat(); // Clone the array
    expensesToSort.sort((a, b) => a.category.localeCompare(b.category));
    return expensesToSort;
  }

  sortAlphabetically() {
    let expensesToSort = this.expenses.concat(); // Clone the array
    expensesToSort.sort((a, b) => a.title.localeCompare(b.title));
    return expensesToSort;
  }
}
