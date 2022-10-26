import {$value} from 'comfortable/$value'
import {str} from './str'
import {syntaxError} from './utils/errors'

const py = (value) => {
    const cValue = $value(value)

    if (cValue.isString()) {
        return str(value)
    }

    syntaxError()
}

export {py}