import { MissingFormalParameter } from '../errors/client-errors'
import { HttpRequest, HttpResponse } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    let statusCode: any
    let body: any

    const requiredProperties = ['name', 'model', 'year']
    for (const props of requiredProperties) {
      if (httpRequest.body[props] === undefined) {
        statusCode = 400
        body = new MissingFormalParameter(`${props}`)
      }
    }

    return {
      statusCode,
      body
    }
  }
}
