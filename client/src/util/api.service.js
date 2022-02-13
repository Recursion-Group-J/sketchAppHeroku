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
    let token = localStorage.getItem("access");
    console.log("json前データ",data)
    if(endpoint==="http://127.0.0.1:8000/api/user/register/"){
        let config = {
            method: method || "GET",
            body: data !== undefined ? JSON.stringify(data): null,
            headers :{
                "content-type":"application/json"}
        }
        return fetch(endpoint, config).then(response=>{
            console.log(response);
            return response.json()
        });
    }
    console.log("json前データ",data)
    let config = {
        method: method || "GET",
        body: data !== undefined ? JSON.stringify(data): null,
        headers :{
            "content-type":"application/json",
            "X-CSRFTOKEN":csrftoken,
            "Authorization": token? "JWT " + token : null
        }
    }
    return fetch(endpoint, config).then(response=>{
        console.log(response);
        return response.json()
    });
}

export {apiService};