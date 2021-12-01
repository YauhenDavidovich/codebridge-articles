import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getArticlesTC} from "./bll/articles-reducer";
import {AppRootStateType} from "./bll/store";
import {ArticlesType} from "./dal/api";
import Article from "./components/Article";
import Highlighter from "react-highlight-words";

function App() {
    const dispatch = useDispatch()
    const articles = useSelector<AppRootStateType, Array<ArticlesType>>(state => state.artilcles)
    useEffect(
        () => {
            dispatch(getArticlesTC({_limit: 100}))
        },[]
    )
    return (

        <div className="App">
            <span>

            </span>


            <div className={"articles__wrapper"}>
                {articles.map(article => { return <Article
                    id={article.id}
                    title={article.title}
                    imageUrl={article.imageUrl}
                    summary={article.summary}
                    publishedAt={article.publishedAt}
                    search={"and"}

                />})}
            </div>


        </div>
    );
}

export default App;
