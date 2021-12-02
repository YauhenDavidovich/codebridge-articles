import React from "react";
import {styled} from "@mui/system";
import {Link as RouterLink, useParams} from 'react-router-dom';
import {Card, CardActions, Link, Paper, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/store";
import {ArticlesType} from "../dal/api";


const StyledPaper = styled(Paper, {
    name: "StyledPaper",
    slot: "Paper"
})({
    alignSelf: "center",
    padding: 15,
});

const StyledArticleActions = styled(Typography, {
    name: "StyledArticleActions",
    slot: "Link"
})({
    position: 'absolute',
    bottom: 16,
    left: 16,
    textDecoration: 'none',
    fontSize: 16,
    marginTop: 8
});



const ArticlePage = () => {

    const {articleId} = useParams() as {
        articleId: string;
    }
    const articles = useSelector<AppRootStateType, Array<ArticlesType>>(state => state.artilcles)
    const url = articles.find(article => article.id === +articleId)?.url
    const title = articles.find(article => article.id === +articleId)?.title
    const summary = articles.find(article => article.id === +articleId)?.summary
    const img = articles.find(article => article.id === +articleId)?.imageUrl


    return (
        <div style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            height: "100vh"
        }}>
            <div className={"article-page__wrapper"}>
                <StyledPaper>
                    <Typography gutterBottom variant="h3" align="center" component="div">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="body1" paragraph component="div">
                        {summary}
                    </Typography>
                    <Typography gutterBottom variant="body1" paragraph component="div">
                        <a href={url}>Full article here</a>
                    </Typography>
                </StyledPaper>
                <StyledArticleActions>
                    <Link component={RouterLink} to={"/home"} color="black" underline="none">
                        {'←Back to homepage'}
                    </Link>
                </StyledArticleActions>

            </div>
        </div>
    )

}

export default ArticlePage
