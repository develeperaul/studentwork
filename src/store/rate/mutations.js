/*
export function someMutation (state) {
}
*/

export function getRegionListSuccess(state, list){
    state.region = list
}

export function getImportantListSuccess(state, list){
    state.important = list
}

export function  getTableListSuccess(state, list){
    state.tableList = list
}