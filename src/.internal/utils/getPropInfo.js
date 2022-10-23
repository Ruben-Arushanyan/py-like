import {hasOwnProperty} from './hasOwnProperty'
import {isFunction} from './isFunction'

export const getPropInfo = (object, prop) => {
    const info = {
        value: undefined,
        prop,
        isExist: false,
        isOwnProp: false,
        isFromPrototype: false,
        isFunction: false,
        isSymbolProp: false,
    }

    info.isSymbolProp = typeof prop === 'symbol'
    info.value = object[prop]
    info.isFunction = isFunction(info.value)

    if (info.isSymbolProp) {
        info.isOwnProp = Object.getOwnPropertySymbols(object).includes(prop)
        info.isExist =  info.isOwnProp || info.value !== undefined // TODO bad solution, but now is enough
    } else {
        info.isOwnProp = hasOwnProperty(object, prop)
        info.isExist = prop in object
    }
    info.isFromPrototype = !info.isOwnProp

    return info
}