import { Food } from '../models/food-model'

describe('Class', () => {
  test('Class Food', () => {
    const classFood = new Food({
      name: 'Apple',
      description: 'Is a delicious fruit',
      price: 1500
    })

    expect(classFood.getName()).toEqual('Apple')
    expect(classFood.getDescription()).toEqual('Is a delicious fruit')
    expect(classFood.getPrice()).toEqual(1500)
  })
})
