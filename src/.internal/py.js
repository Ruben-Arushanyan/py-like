import {$value} from 'comfortable/$value'
import {pyString} from './pyString'
import {syntaxError} from './utils/errors'

const py = (value) => {
    const cValue = $value(value)

    if (cValue.isString()) {
        return pyString(value)
    }

    syntaxError()
}

export {py}