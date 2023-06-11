import { proxy } from 'valtio'

const state = proxy({
    sidebar: true,
    screenSize: 800,
    username: '',
    secret: '',
})

export default state;