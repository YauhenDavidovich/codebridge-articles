import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getArticlesTC} from "./bll/articles-reducer";
import {AppRootStateType} from "./bll/store";
import {ArticlesType} from "./dal/api";

function App() {
    const dispatch = useDispatch()
    const articles = useSelector<AppRootStateType, Array<ArticlesType>>(state => state.artilcles)
    useEffect(
        () => {
            dispatch(getArticlesTC({_limit: 10}))
        }
    )
    return (
        <div className="App">
            {articles.map(article => { return <div>{article.id}</div>})}

        </div>
    );
}

export default App;
