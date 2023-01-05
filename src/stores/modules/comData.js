import {comRawLoad} from "@/utils/comRaw.js";
import { ElMessage } from 'element-plus'
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
            this.commit('clearFocusAppData')
            ElMessage({
                message: '删除成功！',
                type: 'success',
            })
        }
    }
}
