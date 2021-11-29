import axios, {AxiosResponse} from "axios"

const instance = axios.create({
    baseURL: "https://api.spaceflightnewsapi.net/v3",
    withCredentials: true,
})

export const API = {
    getArticles(params: GetArticlesParamsType){
        return instance.get<GetArticlesParamsType, AxiosResponse<ResponseArticlesType>>('articles', {params: {...params}})
    }
}


export type GetArticlesParamsType = {
    _limit: number
}

export type ResponseArticlesType = {
    count: number
}

