import { HttpRequest, HttpResponse } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    let statusCode: any
    let body: any

    if (httpRequest.body.name === undefined) {
      statusCode = 400
      body = new Error('error in the: name')
    }
    if (httpRequest.body.model === undefined) {
      statusCode = 400
      body = new Error('error in the: model')
    }

    return {
      statusCode,
      body
    }
  }
}
