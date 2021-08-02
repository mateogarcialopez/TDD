import { UrlLogin } from '../protocols/protocols-http'

describe('Protocols http and query´s', () => {
  test('url login', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/login')

    expect(parseUrl.href).toBe('http://localhost:3000/login')
    expect(parseUrl.port).toBe('3000')
  })

  test('Response Query', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')
    const expectAuth = {
      user: 'user',
      password: 'password'
    }
    expect(parseUrl.query).toEqual(expectAuth)
  })

  test('Url User', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:300/user')
    expect(parseUrl.href).toBe('http://localhost:300/user')
  })

  test('Response Query User', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/user?user=user&password=password&name=name&lastname=lastname')
    const expectAuth = {
      user: 'user',
      password: 'password',
      name: 'name',
      lastname: 'lastname'
    }

    expect(parseUrl.query).toEqual(expectAuth)
  })
})
