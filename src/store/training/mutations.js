/*
export function someMutation (state) {
}
*/
export  function getLessonListSuccess(state, list){
    state.lessonList = list
}

export function getLessonItemSuccess(state, item){
    state.lessonItem = item[0]
}
