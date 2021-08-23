/*
export function someMutation (state) {
}
*/

export function stateSuccess(state, status){
    if(status){
        state.status = 'ok'
    }
     
}

export function toggleFooter(state, value){
    state.footerState = value
}