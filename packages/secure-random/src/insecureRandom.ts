interface Option {
    min?: number
    max?: number
}

export const insecureRandom = (option?: Option) => {
    const {min = 0, max = 1} = option || {}

    if (min > max) {
        throw new Error('"min" cannot be greater than "max".')
    }

    const limit = (value: number) => {
        return value * (max - min) + min
    }

    return limit(Math.random())
}
