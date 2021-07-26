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

export function getRateTableList(region_id, important_id){
    return apiStudent(`tariffs.php?region=${region_id}&important=${important_id}`).json()
}