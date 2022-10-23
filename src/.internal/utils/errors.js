
export const syntaxError = () => {
    throw Error('SyntaxError: invalid syntax')
}

export const attributeError = (options={}) => {
    const {
        objectName,
        attributeName,
    } = options

    throw Error(`AttributeError: '${objectName}' object has no attribute '${attributeName}'`)
}