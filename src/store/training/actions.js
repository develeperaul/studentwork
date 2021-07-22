/*
export function someAction (context) {
}
*/
import { getLessonList, getLessonItem } from "src/boot/helpers/training";

export async function lessonList({commit}){
    const list = await getLessonList();
    commit('getLessonListSuccess', list)
}

export async function lessonItem({commit}, id){
    const item = await getLessonItem(id);
    commit('getLessonItemSuccess', item)
}