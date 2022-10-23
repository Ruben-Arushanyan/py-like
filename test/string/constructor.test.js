import {py} from '../../.packed'

test('py - constructor', () => {
    // errors
    expect(() => py()).toThrow('SyntaxError: invalid syntax')
    expect(() => py(123)).toThrow('SyntaxError: invalid syntax')

    expect(py('hello world') + '').toBe('hello world')
    expect(String(py('hello world'))).toBe('hello world')
})