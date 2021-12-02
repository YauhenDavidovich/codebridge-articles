import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ArticlesType} from "../dal/api";
import {AppRootStateType} from "../bll/store";
import {getArticlesTC} from "../bll/articles-reducer";
import Search from "./Search";
import Article from "./Article";
import Paginator from "./Pagination";
import {Typography} from "@mui/material";

function HomePage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResultCount, setSearchResultCount] = useState(0)
    const [page, setPage] = useState(1);
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
        console.log(searched)
        setSearchResultCount(searched.length)
        return searched
    }, [articles, searchTerm,searchResultCount])
    console.log(searchedArticles)

    const getPaginatedArticles = (articles: Array<ArticlesType>) => {
        const offset = (page-1) * 3;
        return articles.slice(offset, offset + 3);
    }

    const renderArticles = () => {
        return getPaginatedArticles(searchedArticles);
    }

    useEffect(
        () => {
            dispatch(getArticlesTC({_limit: 100}))
        }, []
    )
    return (

        <div className="homepage">
            <Search setSearchTerm={setSearchTerm} results={searchResultCount}/>
            <div className={"articles__wrapper"}>
                {renderArticles().map(article => {
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
            <Paginator currentPage={page} pages={searchedArticles.length+1} setPage={setPage}/>
        </div>
    );
}

export default HomePage;
