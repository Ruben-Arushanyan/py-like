
import {attributeError} from './errors'

export const resolveGetOperation = (options) => {
    const {
        property,
        PUBLIC_API,
        _this,
    } = options

    const apiConfig = PUBLIC_API[property]    

    if (apiConfig) {
        const { allowGet, isFunction } = apiConfig
        if (allowGet) {
            if (isFunction) {
                return _this[property].bind(_this)
            }
            return _this[property]
        }
        attributeError({ type: 'unreadable attribute'})
    }

    if (property === '__js__') {
        return _this
    }

    if (property === Symbol.toPrimitive) {
        return _this.js_toPrimitive.bind(_this)
    }

    if (property === 'toString') {
        return () => _this.js_toPrimitive('string')
    }

    if (property === 'valueOf') {
        return () => _this.js_toPrimitive('number')
    }

    return _this['*']
}