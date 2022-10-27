import {$value} from 'comfortable/$value'
import {str} from './str'
import {syntaxError} from './utils/errors'
import {createPureProxy} from './utils/createPureProxy'
import {resolveGetOperation} from './utils/resolveOperations'

class js_py {
    static str = str
    static __name__ = 'py'
    static js_toPrimitive(hint) {
        return `<class 'py'>`
    }
    static ['*'](property) {
        attributeError({
            objectName: 'py',
            attributeName: property,
            type: 'no attribute',
        })
    }
}

const py = createPureProxy({
    apply(target, thisArg, argumentsList) {
        const value = argumentsList[0]
        if ($value(value).isString()) {
            return str(value)
        }
        syntaxError()
    },
    get(target, property, receiver) {
        return resolveGetOperation({
            property,
            api: py_api,
            _this: js_py,
        })
    }
})

const py_api = Object.setPrototypeOf({
    str: {
        allowGet: true,
        allowSet: false,
        isFunction: false,
    }
}, null)

export {py}