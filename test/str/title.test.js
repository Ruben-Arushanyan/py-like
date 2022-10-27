import {py} from '../../.packed'

test('str.title', () => {
    const str = py('hello world')
    expect(str.title()).toBe('Hello World')
    const title = str.title
    expect(title()).toBe('Hello World')
})