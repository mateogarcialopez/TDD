import { VehicleHelper } from '../helpers/vehicle-model-helper'

export class VehicleModel {
  constructor (private readonly Vehicle: VehicleHelper) { }

  getName (): string {
    return this.Vehicle.name
  }

  getModel (): string {
    return this.Vehicle.model
  }

  getYear (): number {
    return this.Vehicle.year
  }

  getPrice (): number {
    return this.Vehicle.price
  }

  getInventory (): boolean {
    return this.Vehicle.inventory
  }
}
