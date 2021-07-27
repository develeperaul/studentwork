import { apiStudent } from "../ky";

export function sendAuth(cellPhone, mail){
    return apiStudent('req.php', {phone:cellPhone, email:mail}).json()
}