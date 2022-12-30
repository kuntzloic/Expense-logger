export class Expense {
  id: number;
  title: string;
  date: Date;
  amount: number;
  category: ExpenseType;
  description?: string;

  constructor(id: number, title: string, date: Date, amount: number, category: ExpenseType, description?: string) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.amount = amount;
    this.category = category;
    this.description = description;
  }
}

export enum ExpenseType {
  FOOD = 'Food',
  TRANSPORT = 'Transport',
  HOUSING = 'Housing',
  CLOTHES = 'Clothes',
  HEALTH = 'Health',
  ENTERTAINMENT = 'Entertainment',
  OTHER = 'Other'
}
