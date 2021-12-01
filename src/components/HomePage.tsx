import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ArticlesType} from "../dal/api";
import {AppRootStateType} from "../bll/store";
import {getArticlesTC} from "../bll/articles-reducer";
import Search from "./Search";
import Article from "./Article";

function HomePage() {
    const [searchTerm, setSearchTerm] = useState("")
    const dispatch = useDispatch()
    const articles = useSelector<AppRootStateType, Array<ArticlesType>>(state => state.artilcles)

    let searchedArticles = useMemo(() => {
        let searched: Array<ArticlesType> = [...articles]
        let searchInTitle
        let searchInSummary
        let searchedBoth:Array<ArticlesType>
        searchInTitle = searchTerm ? searched.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())) : searched
        searchInSummary = searchTerm ? searched.filter(item => item.summary.toLowerCase().includes(searchTerm.toLowerCase())) : searched
        searchedBoth = searchInTitle.concat(searchInSummary)
        searched = searchedBoth.filter((item, pos) => searchedBoth.indexOf(item) === pos)
        return searched
    }, [articles, searchTerm])

    useEffect(
        () => {
            dispatch(getArticlesTC({_limit: 39}))
        }, []
    )
    return (

        <div className="homepage">
            <Search setSearchTerm={setSearchTerm} results={searchedArticles.length+1}/>
            <div className={"articles__wrapper"}>
                {searchedArticles.map(article => {
                    return <Article
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        imageUrl={article.imageUrl}
                        summary={article.summary}
                        publishedAt={article.publishedAt}
                        search={searchTerm}
                    />
                })}
            </div>
        </div>
    );
}

export default HomePage;
