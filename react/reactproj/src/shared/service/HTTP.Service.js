import axios from "axios";

const axiosHTTP = axios.create({
    baseURL:window.location.hostname.includes("localhost")?" http://localhost:8080" : "http://localhost:8080/users"
})


axiosHTTP.interceptors.request.use(
    (config)=>{
        const token = !!sessionStorage.getItem("accessToken");
        return{
            ...config,
            headers:{
                ...axios(token && {'Authorization' : `Bearer ${sessionStorage.getItem("accessToken")}`})
            }
        }
    },
    (error)=>{
        return Promise.reject(error)
    }
);

axios.axiosHTTP.interceptors.response.use(
    (response)=>{
        return response.data;
    },
    (error)=>{
        return Promise.reject(error);
    }
)
// create interceptor for response 
axiosHTTP.interceptors.response.use(
    (response)=>{
        return response.data;
    },
    (error)=>{
        return Promise.reject(error)
    }
)


// global request http request

export const GET = (url,header={})=>{
    return axiosHTTP.get(url,{headers:header})
}

export const DELETE = (url,header={})=>{
    return axiosHTTP.delete(url,{headers:header})
}

export const POST = (url,payload,header={})=>{
    return axiosHTTP.post(url,payload,{headers:header})
}

export const PUT = (url,payload,header={})=>{
    return axiosHTTP.put(url,payload,{headers:header})
}