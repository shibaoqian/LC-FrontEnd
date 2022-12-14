export default {
    state: {
        dragX: 0,
        dragY: 0
    },
    mutations: {
        setXYData(state,data) {
            state.dragX = data.X
            state.dragY = data.Y
        }
    }
}