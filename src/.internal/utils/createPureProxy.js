import { PURE_EMPTY_OBJECT } from './constants'
import {syntaxError} from './errors'

const createPureProxy = (options={}, toPrimitive) => {
    const handler = {
        apply(target, thisArg, argumentsList) {
            syntaxError()
        },
        construct(target, argumentsList, newTarget) {
            syntaxError()
        },
        defineProperty(target, property, descriptor) {
            syntaxError()
        },
        deleteProperty(target, property) {
            syntaxError()
        },
        getOwnPropertyDescriptor(target, prop) {
            syntaxError()
        },
        getPrototypeOf(target) {
            syntaxError()
        },
        has(target, prop) {
            syntaxError()
        },
        isExtensible(target) {
            syntaxError()
        },
        ownKeys(target) {
            syntaxError()
        },
        preventExtensions(target) {
            syntaxError()
        },
        set(target, property, value, receiver) {
            syntaxError()
        },
        setPrototypeOf(target, prototype) {
            syntaxError()
        },
        ...options,
        get(target, property, receiver) {
            if (toPrimitive) {
                if (property === Symbol.toPrimitive) {
                    return toPrimitive
                }
                if (property === 'toString') {
                    return () => toPrimitive('string')
                }
                if (property === 'valueOf') {
                    return () => toPrimitive('number')
                }
            }
            if (options?.get) {
                return options?.get?.(target, property, receiver)
            }
            syntaxError()
        },
    }

    const proxy = new Proxy(PURE_EMPTY_OBJECT, handler)
    return proxy
}

export {createPureProxy}