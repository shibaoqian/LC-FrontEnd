
export default {
    comRaw: (state) => { return state.comData.comRaw },
    appsData: (state) => { return state.comData.appsData },
    dragX: (state) => { return state.dragStatus.dragX },
    dragY: (state) => { return state.dragStatus.dragY },
    dragStatus: (state) => { return state.dragStatus.dragStatus },
    focusAppData: (state) => { return state.comData.focusAppData},
    moveStatus: (state) => { return state.comData.moveStatus},
    focusStatus: (state) => { return state.comData.focusStatus},
    menuShow: (state) => { return state.comData.menuShow},
    downX: (state) => { return state.dragStatus.downX},
    downY: (state) => { return state.dragStatus.downY}
}