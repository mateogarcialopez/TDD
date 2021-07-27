import { Food } from '../models/food-model'

describe('Class', () => {
  test('Class Food', () => {
    const classFood = new Food('Apple', 'Is a delicious fruit', 1500)

    expect(classFood.getName()).toEqual('Apple')
    expect(classFood.getDescription()).toEqual('Is a delicious fruit')
    expect(classFood.getPrice()).toEqual(1500)
  })
})
