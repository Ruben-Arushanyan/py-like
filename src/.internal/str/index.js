import {createPureProxy} from '../utils/createPureProxy'
import {attributeError} from '../utils/errors'
import {resolveGetOperation} from '../utils/resolveOperations'
import {$string} from 'comfortable/$string'


const PUBLIC_API = Object.setPrototypeOf({
    title: {
        allowGet: true,
        allowSet: false,
        isFunction: true,
    },
}, null)

class Str {
    js_value_original
    js_value_string

    constructor(value) {
        this.js_value_original = value
        this.js_value_string = String(value)
    }

    title() {
        return $string(this.js_value_string).titleCase()
    }

    js_toPrimitive(hint) {
        return this.js_value_string
    }

    ['*'](property) {
        attributeError({
            objectName: 'str',
            attributeName: property,
            type: 'no attribute',
        })
    }
}


const str = (value) => {
    const _this = new Str(value)
    return createPureProxy({
        get(target, property, receiver) {
            return resolveGetOperation({
                property,
                PUBLIC_API,
                _this,
            })
        }
    })
}

export {str}