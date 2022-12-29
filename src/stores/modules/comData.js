import getImageRaw from "@/utils/getImageRaw.js";
import FEBtn from "@/components/FEBtn.vue";
import FEInput from "@/components/FEInput.vue";
import FERadio from "@/components/FERadio.vue";
import {shallowRef} from "vue";
const comRawLoad = [
    {
        name: '按钮',
        style: {
            width: 100,
            height: 50
        },
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
        style: {
            width: 200,
            height: 100
        },
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
        style: {
            width: 300,
            height: 100
        },
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
        appsData: [],
        focusAppData: {},
        focusStatus: false,
        moveStatus: false,
        menuShow: false
    },
    mutations: {
        setAppsData(state,data) {
            state.appsData.push(
                data
            )
        },
        setFocusAppData(state,data) {
            state.focusAppData = data
        },
        clearFocusAppData(state,data) {
            state.focusAppData = {}
            state.focusStatus = false
        },
        setMoveStatus(state,data) {
            state.moveStatus = data
        },
        setMenuShow(state,data) {
            state.menuShow = data
        },
        setFocusStatus(state,data) {
            if (state.focusStatus && data.key !== state.focusAppData.key){
                state.focusStatus = false
                setTimeout(() => {
                    state.focusStatus = true
                },300)
            }else{
                state.focusStatus = true
            }
        },
        delAppData(state){
            const key = state.focusAppData.key
            let delIndex = 0
            state.appsData.forEach((res,index) => {
                if (res.key === key){
                    delIndex = index
                }
            })
            state.appsData.splice(delIndex,1)
        }
    }
}