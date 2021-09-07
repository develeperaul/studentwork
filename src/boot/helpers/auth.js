import { apiStudent } from "../ky";

export function sendAuth(cellPhone, mail){
    const formData = new FormData();
    formData.append('phone', cellPhone);
    formData.append('email', mail);
    return apiStudent
        .post('req.php', 
        {body: formData}).json()
    
}