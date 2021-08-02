export class BadUrl extends Error {
  constructor (public url: string) {
    super(`Error in url: ${url}`)
  }
}
