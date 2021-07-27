/*
export function someMutation (state) {
}
*/

export function stateSuccess(state, status){
    if(status){
        state.status = 'ok'
    }
     
}
