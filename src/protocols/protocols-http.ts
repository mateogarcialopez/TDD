// eslint-disable-next-line node/no-deprecated-api
import { UrlWithParsedQuery, parse } from 'url'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class UrlLogin {
  public static parseUrl (url: string): UrlWithParsedQuery {
    return parse(url, true)
  }
}
