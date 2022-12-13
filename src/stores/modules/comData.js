import getImageRaw from "@/utils/getImageRaw.js";
const comRowLoad = [
    {
        name: 'button',
        width: 100,
        height: 50,
        icon: getImageRaw('icon','vue','svg')
    },
    {
        name: 'button',
        width: 100,
        height: 50,
        icon: getImageRaw('icon','vue','svg')
    },
    {
        name: 'button',
        width: 100,
        height: 50,
        icon: getImageRaw('icon','vue','svg')
    }
]

export default {
    state: {
        comRow: comRowLoad
    },
    action: {
        setComData({state},data) {
            state.comRow = data
        }
    }
}