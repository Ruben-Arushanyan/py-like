
export const syntaxError = () => {
    throw Error('SyntaxError: invalid syntax')
}

export const attributeError = (options={}) => {
    const {
        objectName,
        attributeName,
        type,
    } = options

    switch (type) {
        case 'no attribute': {
            throw Error(`AttributeError: '${objectName}' object has no attribute '${attributeName}'`)
        }
        case 'unreadable attribute': {
            throw Error(`AttributeError: unreadable attribute`)
        }
    }
}