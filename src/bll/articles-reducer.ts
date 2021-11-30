import {Dispatch} from "redux";
import {API, ArticlesType, GetArticlesParamsType, ResponseArticlesType} from "../dal/api";


let initialState:ArticlesInitialStateType = {
    articles: [
        {
            id: 0,
            title: "",
            url: "",
            imageUrl: "",
            newsSite: "",
            summary: "",
            publishedAt: "",
            updatedAt: "",
            featured: false,
            launches: [],
            events: [],
        }],
};

type ArticlesInitialStateType = {
    articles: ArticlesType[]
}

//Reducer
export const articlesReducer = (state:ArticlesInitialStateType = initialState, action: ActionsTypes): ArticlesInitialStateType => {
    switch (action.type) {
        case SET_ARTICLES:
            return {
                ...state,
                articles: action.data.articles
            }
        default:
            return state;
    }
};

// actions
const SET_ARTICLES = 'SET-SET_ARTICLES';

// Action Creators
export const SetArticlesAC = (data:ResponseArticlesType) => ({
    type: SET_ARTICLES,
    data,
} as const);

export const getArticlesTC = (data: GetArticlesParamsType) => (dispatch: Dispatch) => {
    API.getArticles(data)
        .then(res => {
            dispatch(SetArticlesAC(res.data))
        })
        .catch(err => {
            console.log(err)
        })
}


export type SetArticlesType = ReturnType<typeof SetArticlesAC>
type ActionsTypes = SetArticlesType
