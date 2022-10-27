import {createPureProxy} from '../../.packed/.internal/utils/createPureProxy'

test('utils - createPureProxy', () => {
    // errors
    let proxy = createPureProxy()
    expect(() => proxy.x).toThrow('invalid syntax')
    expect(() => proxy.x = 10).toThrow('invalid syntax')
    expect(() => delete proxy.x).toThrow('invalid syntax')
    expect(() => new proxy).toThrow()
    expect(() => 'x' in proxy).toThrow('invalid syntax')
    expect(() => Number(proxy)).toThrow('invalid syntax')
    expect(() => String(proxy)).toThrow('invalid syntax')



    // get
    proxy = createPureProxy({
        get(target, property, receiver) {
            return property
        }
    })

    expect(proxy.x).toBe('x')
    expect(proxy.yyyy).toBe('yyyy')
    expect(proxy.toString).toBe('toString')
})