import { proxy } from 'valtio'

const state = proxy({
    sidebar: true,
    screenSize: 800,
    username: '',
    secret: '',
    user: {},
})

export default state;