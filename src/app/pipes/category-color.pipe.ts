import { Pipe, PipeTransform } from '@angular/core';
import {ExpenseType} from "../models/Expense";

@Pipe({
  name: 'categoryColor'
})
export class CategoryColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case ExpenseType.FOOD:
        return '#0077ff';
      case ExpenseType.CLOTHES:
        return '#ffd711';
      case ExpenseType.ENTERTAINMENT:
        return '#E91E63';
      case ExpenseType.TRANSPORT:
        return '#F44336';
      case ExpenseType.HOUSING:
        return '#FF9800';
      case ExpenseType.HEALTH:
        return '#149450';
      case ExpenseType.OTHER:
        return '#919191';
      default:
        return '#607D8B';
    }
  }
}
