import {py} from '../../.packed'

test('str.constructor', () => {
    expect(py.str() + '').toBe('undefined')
    expect(py.str(123) + '').toBe('123')

    expect(py.str('hello world') + '').toBe('hello world')
    expect(String(py.str('hello world'))).toBe('hello world')
})