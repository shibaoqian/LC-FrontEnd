export default {
    state: {
        dragX: 0,
        dragY: 0,
        dragStatus: false
    },
    mutations: {
        setXYData(state,data) {
            state.dragX = data.X
            state.dragY = data.Y
        },
        setDragStatus(state,data) {
            state.dragStatus = data
        }
    }
}