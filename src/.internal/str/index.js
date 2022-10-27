import {createPureProxy} from '../utils/createPureProxy'
import {attributeError} from '../utils/errors'
import {resolveGetOperation} from '../utils/resolveOperations'
import {$string} from 'comfortable/$string'

class js_str {
    static __name__ = 'str'
    static js_toPrimitive(hint) {
        return `<class 'str'>`
    }
    static ['*'](property) {
        attributeError({
            objectName: 'str',
            attributeName: property,
            type: 'no attribute',
        })
    }

    is_py_like = true
    js_value_original
    js_value_string

    __class__ = str

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

const js_str_api = Object.setPrototypeOf({
    title: {
        allowGet: true,
        allowSet: false,
        isFunction: true,
    },
    __class__: {
        allowGet: true,
        allowSet: false,
        isFunction: false,
    }
}, null)

const str = createPureProxy({
    apply(target, thisArg, argumentsList) {
        const _this = new js_str(...argumentsList)
        return createPureProxy({
            get(target, property, receiver) {
                return resolveGetOperation({
                    property,
                    api: js_str_api,
                    _this,
                })
            }
        })
    },
    get(target, property, receiver) {
        return resolveGetOperation({
            property,
            api: str_api,
            _this: js_str,
        })
    }
})

const str_api = Object.setPrototypeOf({
    __name__: {
        allowGet: true,
        allowSet: false,
        isFunction: false,
    }
}, null)

export {str}