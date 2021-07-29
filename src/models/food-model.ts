import { FoodHelper } from '../helpers/food-model.helper'

export class Food {
  constructor (private readonly Food: FoodHelper) {}

  getName (): string {
    return this.Food.name
  }

  getDescription (): string {
    return this.Food.description
  }

  getPrice (): number {
    return this.Food.price
  }
}
