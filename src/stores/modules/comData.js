import getImageRaw from "@/utils/getImageRaw.js";
const comRowLoad = [
    {
        name: '按钮',
        width: 100,
        height: 50,
        component: 'FEButton',
        icon: getImageRaw('icon','vue','svg')
    },
    {
        name: '按钮',
        width: 100,
        height: 50,
        component: 'FEButton',
        icon: getImageRaw('icon','vue','svg')
    },
    {
        name: '按钮',
        width: 100,
        height: 50,
        component: 'FEButton',
        icon: getImageRaw('icon','vue','svg')
    }
]

export default {
    state: {
        comRow: comRowLoad
    },
    mutations: {
        setComData({state},data) {
            state.comRow = data
        }
    }
}