/*
export function someAction (context) {
}
*/

import {sendAuth} from '../../boot/helpers/auth'

export async function send({commit}, {cellphone, mail}){
    
    const status = await sendAuth(cellphone, mail)
    commit('stateSuccess', status)
}   
