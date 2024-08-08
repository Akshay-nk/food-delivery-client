import {BaseURL} from './BaseURL'
import { commonAPI } from './commonAPI'




export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${BaseURL}/user/register`,user,"")
}

export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BaseURL}/user/login`,user,"")
}

export const getFoodAPI = async()=>{
    return await commonAPI("GET",`${BaseURL}/foodview`,"","")
}

export const getOneFoodAPI = async(id)=>{
    return await commonAPI("GET",`${BaseURL}/onefood/${id}`,"","")
}

