import { csrftoken } from "./csrftoken";

// function handleResponse(response){
//     if(response.status === 204){
//         return "";
//     }else if(response.status === 404){
//         return null;
//     } else {
//         console.log(response);
//         console.log(response.json());
//         return response.json()
//     }
// }

function apiService(endpoint, method, data) {
    const config = {
        method: method || "GET",
        body: data !== undefined ? JSON.stringify(data): null,
        headers :{
            "content-type":"application/json",
            "X-CSRFTOKEN":csrftoken
        }
    }
    return fetch(endpoint, config);
}

export {apiService};