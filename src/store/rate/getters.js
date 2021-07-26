/*
export function someGetter (state) {
}
*/
export function regionList(state){
    if(state.region!==null){
    let str = JSON.stringify(state.region);
    str = str.replace(/name/g, 'label');
    return JSON.parse(str)
    }
   
}

export function importantList(state){
    if(state.important){
        let str = JSON.stringify(state.important);
        str = str.replace(/name/g, 'label');
        return JSON.parse(str)
    } 
}

export function tableList(state){
    if(state.tableList){

        return state.tableList
    }
}