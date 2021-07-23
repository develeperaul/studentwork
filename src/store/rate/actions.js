/*
export function someAction (context) {
}
*/

import {getRegionList, getImportantList, getRateTableList} from '../../boot/helpers/rate'

export async function regionList({commit}){
    const list = await getRegionList();
    commit('getRegionListSuccess', list)
}


export async function importantList({commit}){
    const list = await getImportantList();
    commit('getImportantListSuccess', list)
}

export async function tableList({commit}){
    const list = await getRateTableList()
    commit('getTableListSuccess', list)
}