const objectHasOwnProperty = Object.prototype.hasOwnProperty

export const hasOwnProperty = (object, prop) => objectHasOwnProperty.call(object, prop)