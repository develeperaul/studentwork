/*
export function someGetter (state) {
}
*/
export function lessonList(state){
    if(state.lessonList!==null){
        let str = JSON.stringify(state.lessonList);
        str = str.replace(/name/g, 'label');
        return JSON.parse(str)
    }
}


export function lessonItem(state){
    
 return state.lessonItem
}