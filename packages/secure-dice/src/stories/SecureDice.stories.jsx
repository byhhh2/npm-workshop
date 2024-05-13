import SecureDiceComponent from '../components/SecureDice'

export default {
    title: 'SecureDice',
    component: SecureDiceComponent,
    tags: ['autodocs'],
    parameters: {
        backgrounds: {
            default: 'black',
            values: [
                {
                    name: 'black',
                    value: '#000000',
                },
            ],
        },
    },
    args: {},
}

export const RandomDice = {}
