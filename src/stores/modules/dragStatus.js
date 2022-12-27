export default {
    state: {
        dragX: 0,
        dragY: 0,
        dragStatus: false,
        downX: 0,
        downY: 0
    },
    mutations: {
        setXYData(state,data) {
            state.dragX = data.X
            state.dragY = data.Y
        },
        setDragStatus(state,data) {
            state.dragStatus = data
        },
        setDownData(state,data) {
            state.downX = data.X
            state.downY = data.Y
        }
    }
}