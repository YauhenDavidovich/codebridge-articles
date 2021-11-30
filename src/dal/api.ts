import axios, {AxiosResponse} from "axios"

const instance = axios.create({
    baseURL: "https://api.spaceflightnewsapi.net/v3",
})

export const API = {
    getArticles(params: GetArticlesParamsType) {
        return instance.get<GetArticlesParamsType, AxiosResponse<Array<ArticlesType>>>('articles', {params: {...params}})
    }
}

export type GetArticlesParamsType = {
    _limit: number
}

export interface ArticlesType {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    updatedAt: string;
    featured: boolean;
    launches: Launch[];
    events: any[];
}


export interface Launch {
    id: string;
    provider: string;
}
