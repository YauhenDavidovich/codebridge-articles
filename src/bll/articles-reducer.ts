import {Dispatch} from "redux";
import {API, ArticlesType, GetArticlesParamsType} from "../dal/api";


// let initialState:ArticlesInitialStateType = {
//     articles: [
//         {
//             id: 0,
//             title: "",
//             url: "",
//             imageUrl: "",
//             newsSite: "",
//             summary: "",
//             publishedAt: "",
//             updatedAt: "",
//             featured: false,
//             launches: [],
//             events: [],
//         }],
// };
//
// type ArticlesInitialStateType = {
//     articles: ArticlesType[]
// }

const initialState: Array<ArticlesType> = []

//Reducer
export const articlesReducer = (state: Array<ArticlesType> = initialState, action: ActionsTypes): Array<ArticlesType> => {
    switch (action.type) {
        case SET_ARTICLES:
            return action.articles

        default:
            return state;
    }
};

// actions
const SET_ARTICLES = 'SET-SET_ARTICLES';

// Action Creators
export const SetArticlesAC = (articles: Array<ArticlesType>) => ({
    type: SET_ARTICLES,
    articles,
} as const);

export const getArticlesTC = (data: GetArticlesParamsType) => (dispatch: Dispatch) => {
    API.getArticles(data)
        .then(res => {
            debugger
            dispatch(SetArticlesAC(res.data))
        })
        .catch(err => {
            console.log(err)
        })
}


export type SetArticlesType = ReturnType<typeof SetArticlesAC>
type ActionsTypes = SetArticlesType
