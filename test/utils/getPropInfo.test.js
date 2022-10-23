import {getPropInfo} from '../../.packed/.internal/utils/getPropInfo'

test('getPropInfo', () => {
    const f = () => {}
    let obj = {
        a: 1,
        __proto__: {
            b: 33,
            d: f,
            [Symbol.toPrimitive]: 55
        },
        c: f
    }

    expect(getPropInfo(obj, 'a')).toEqual({
        value: 1,
        prop: 'a',
        isExist: true,
        isOwnProp: true,
        isFromPrototype: false,
        isFunction: false,
        isSymbolProp: false,
    })

    expect(getPropInfo(obj, 'c')).toEqual({
        value: f,
        prop: 'c',
        isExist: true,
        isOwnProp: true,
        isFromPrototype: false,
        isFunction: true,
        isSymbolProp: false,
    })

    expect(getPropInfo(obj, 'b')).toEqual({
        value: 33,
        prop: 'b',
        isExist: true,
        isOwnProp: false,
        isFromPrototype: true,
        isFunction: false,
        isSymbolProp: false,
    })

    expect(getPropInfo(obj, 'd')).toEqual({
        value: f,
        prop: 'd',
        isExist: true,
        isOwnProp: false,
        isFromPrototype: true,
        isFunction: true,
        isSymbolProp: false,
    })

    expect(getPropInfo(obj, Symbol.toPrimitive)).toEqual({
        value: 55,
        prop: Symbol.toPrimitive,
        isExist: true,
        isOwnProp: false,
        isFromPrototype: true,
        isFunction: false,
        isSymbolProp: true,
    })
})