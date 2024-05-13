interface Option {
    min?: number
    max?: number
}

export const secureRandom = (option?: Option) => {
    const {min = 0, max = 1} = option || {}

    if (min > max) {
        throw new Error('"min" cannot be greater than "max".')
    }

    const limit = (value: number) => {
        return value * (max - min) + min
    }

    const array = new Uint32Array(1)
    const maxNumber = Math.pow(2, 32) - 1

    if (typeof window === 'undefined') {
        return limit(global.crypto.getRandomValues(array)[0] / maxNumber)
    }
    if (typeof window?.crypto !== 'undefined') {
        return limit(window.crypto.getRandomValues(array)[0] / maxNumber)
    }
    return limit(Math.random())
}
