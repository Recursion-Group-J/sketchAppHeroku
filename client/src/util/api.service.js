import { csrftoken } from "./csrftoken";

function handleResponse(response){
    if(response.status === 204){
        return "";
    }else if(response.status === 404){
        return null;
    } else {
        return response.json()
    }
}

function apiService(endpoint, method, data) {
    const config = {
        method: method || "GET",
        body: data !== undefined ? JSON.stringify(data): null,
        headears :{
            "context-type":"application/json",
            "X-CSRFTOKEN":csrftoken
        }
    }
    return fetch(endpoint, config).then(handleResponse);
}

export {apiService};