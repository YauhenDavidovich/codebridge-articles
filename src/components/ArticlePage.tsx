import React from "react";
import {styled} from "@mui/system";
import {useParams} from 'react-router-dom';
import {Card, CardActions, Paper} from "@mui/material";
import Iframe from "react-iframe";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/store";
import {ArticlesType} from "../dal/api";


const StyledCard = styled(Card, {
    name: "StyledCard",
    slot: "Wrapper"
})({
    color: "#6B8068",
    background: '#FFFFFF',
    border: '1px solid #EAEAEA',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
    marginBottom: 45,
    borderRadius: 5,
    maxWidth: 400,
    width: "100%",
    height: 530,
    position: 'relative',
});

const StyledCardActions = styled(CardActions, {
    name: "StyledCardActions",
    slot: "Link"
})({
    position: 'absolute',
    bottom: 8,
    left: 8,
    textDecoration: 'none',
    color: "#363636",
    fontSize: 16,
    marginTop: 8
});


type ArticlePagePropsType = {

}



const ArticlePage = (props: ArticlePagePropsType) => {

    const {articleId} = useParams() as {
        articleId: string;
    }
    const articles = useSelector<AppRootStateType, Array<ArticlesType>>(state => state.artilcles)
    const url = articles.find(article => article.id === +articleId)?.url
    const title = articles.find(article => article.id === +articleId)?.title
    const summary = articles.find(article => article.id === +articleId)?.summary
    const img = articles.find(article => article.id === +articleId)?.imageUrl


    return (
        <div style={{backgroundImage:`url(${img})`,backgroundRepeat: 'no-repeat', backgroundSize:"100% auto", height:"100vh"}}>
            <Paper>
                <div>{title}</div>
                <div>{summary}</div>
                <div>Full article here {url}</div>
            </Paper>


        </div>
    )

}

export default ArticlePage
