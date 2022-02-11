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
    const config = {
        method: method || "GET",
        body: data !== undefined ? JSON.stringify(data): null,
        headers :{
            "content-type":"application/json",
            "X-CSRFTOKEN":csrftoken,
            "Authorization": token? "JWT " + token : null
        }
    }
    // console.log("tok3n",token);
    // if(token!=="undefined") config.headers["Authorizations"] = "JWT " + token;
    // console.log(config.headers);
    return fetch(endpoint, config).then(response=>{
        console.log(response);
        return response.json()
    });
}

export {apiService};