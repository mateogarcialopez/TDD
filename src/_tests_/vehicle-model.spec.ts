import { VehicleModel } from '../models/vehicle-models'

describe('Class', () => {
  it('class VehicleModel', () => {
    const sut = new VehicleModel('Nissan', 'DXT', 2020)

    expect(sut.getName()).toEqual('Nissan')
    expect(sut.getModel()).toEqual('DXT')
    expect(sut.getYear()).toEqual(2020)
  })
})
