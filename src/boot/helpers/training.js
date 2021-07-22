import { apiStudent } from "../ky";

export function getLessonList(){
    return apiStudent('lessons.php').json()
}

export function getLessonItem(id){
    return apiStudent(`tarif_card.php?id=${id}`).json()
}