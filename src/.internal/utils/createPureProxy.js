import { PURE_EMPTY_OBJECT } from './constants'
import { syntaxError } from './errors'

const createPureProxy = (options={}) => {
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
        get(target, property, receiver) {
            syntaxError()
        },
        set(target, property, value, receiver) {
            syntaxError()
        },
        setPrototypeOf(target, prototype) {
            syntaxError()
        },
        ...options,
    }

    return new Proxy(PURE_EMPTY_OBJECT, handler)
}

export {createPureProxy}