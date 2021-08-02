// eslint-disable-next-line node/no-deprecated-api
import { UrlWithParsedQuery, parse } from 'url'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class UrlLogin {
  public static parseUrl (url: string): UrlWithParsedQuery {
    if (url === undefined) {
      throw new Error('Invalid URL')
    }
    return parse(url, true)
  }
}
