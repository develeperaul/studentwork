import { apiStudent } from "../ky";

export function getRegionList(){
    return apiStudent('regions.php').json();
}

export function getImportantList(){
    return apiStudent('important.php').json();
}

// export function getRateTableList(id_region, id_important){
//     return apiStudent(`tariffs.php?region=${id_region}&important=${id_important}`).json()
// }

export function getRateTableList(){
    return apiStudent('tariffs.php?region=1&important=3').json()
}