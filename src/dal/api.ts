import axios, {AxiosResponse} from "axios"

const instance = axios.create({
    baseURL: "https://api.spaceflightnewsapi.net/v3",
    withCredentials: true,
})

export const API = {
    getArticles(params: GetArticlesParamsType) {
        return instance.get<GetArticlesParamsType, AxiosResponse<ResponseArticlesType>>('articles', {params: {...params}})
    }
}

export type GetArticlesParamsType = {
    _limit: number
}

export interface ResponseArticlesType {
    articles: ArticlesType[]
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
