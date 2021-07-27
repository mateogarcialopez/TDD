import { VehicleModel } from '../models/vehicle-models'

describe('Class', () => {
  it('class VehicleModel', () => {
    const sut = new VehicleModel({
      name: 'Nissan',
      model: 'DXT',
      year: 2020,
      price: 5000,
      inventory: true
    })

    expect(sut.getName()).toEqual('Nissan')
    expect(sut.getModel()).toEqual('DXT')
    expect(sut.getYear()).toEqual(2020)
    expect(sut.getPrice()).toEqual(5000)
    expect(sut.getInventory()).toEqual(true)
  })
})
