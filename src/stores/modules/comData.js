import getImageRaw from "@/utils/getImageRaw.js";
import FEBtn from "@/components/FEBtn.vue";
import FEInput from "@/components/FEInput.vue";
import FERadio from "@/components/FERadio.vue";
import {shallowRef} from "vue";
const comRawLoad = [
    {
        name: '按钮',
        width: 100,
        height: 50,
        component: shallowRef(FEBtn),
        key: 'FEButton',
        icon: getImageRaw('icon','vue','svg'),
        position: {
            X: 0,
            Y: 0
        }
    },
    {
        name: '输入',
        width: 100,
        height: 50,
        component: shallowRef(FEInput),
        key: 'FEInput',
        icon: getImageRaw('icon','vue','svg'),
        position: {
            X: 0,
            Y: 0
        }
    },
    {
        name: '单选',
        width: 100,
        height: 50,
        component: shallowRef(FERadio),
        key: 'FERadio',
        icon: getImageRaw('icon','vue','svg'),
        position: {
            X: 0,
            Y: 0
        }
    }
]

export default {
    state: {
        comRaw: comRawLoad,
        appsData: []
    },
    mutations: {
        setComData(state,data) {
            state.comRaw = data
        },
        setAppsData(state,data) {
            state.appsData.push(
                data
            )
        }
    }
}