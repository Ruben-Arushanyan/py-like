import {createPureProxy} from '../utils/createPureProxy'
import {getPropInfo} from '../utils/getPropInfo'
import {attributeError} from '../utils/errors'
import {$string} from 'comfortable/$string'

class Str {
    #value
    #cValue
    constructor(value) {
        this.#value = String(value)
        this.#cValue = $string(this.#value)
    }

    title() {
        return this.#cValue.titleCase()
    }

    ['x:y'](info) {
        attributeError({
            objectName: 'str',
            attributeName: info.prop
        })
    }

    [Symbol.toPrimitive](hint) {
        return this.#value
    }
}



const str = (value) => {
    const _this = new Str(value)
    return createPureProxy({
        get(target, property, receiver) {
            const info = getPropInfo(_this, property)
            if (info.isFunction) {
                return info.value.bind(_this)
            } else if(info.isExist) {
                return info.value
            } else {
                return _this['x:y'](info)
            }
        }
    }, _this[Symbol.toPrimitive].bind(_this))
}

export {str}