import { Pipe, PipeTransform } from '@angular/core';
import {ExpenseType} from "../models/Expense";

@Pipe({
  name: 'categoryColor'
})
export class CategoryColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case ExpenseType.FOOD:
        return '#F44336';
      case ExpenseType.CLOTHES:
        return '#E91E63';
      case ExpenseType.ENTERTAINMENT:
        return '#ffd711';
      case ExpenseType.TRANSPORT:
        return '#149450';
      case ExpenseType.HOUSING:
        return '#FF9800';
      case ExpenseType.HEALTH:
        return '#0077ff';
      case ExpenseType.OTHER:
        return '#607D8B';
      default:
        return '#919191';
    }
  }
}
