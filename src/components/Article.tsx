import React from "react";
import {styled} from "@mui/system";
import {Link as RouterLink} from 'react-router-dom';
import {Card, CardActions, CardContent, CardMedia, Link, Typography} from "@mui/material";
import {dateOptions} from "./utils/dateConvert";
import Highlighter from "react-highlight-words";


const StyledCard = styled(Card, {
    name: "StyledCard",
    slot: "Wrapper"
})({
    color: "#6B8068",
    //backgroundImage: `url("https://picsum.photos/200/300")`,
    background: '#FFFFFF',
    border: '1px solid #EAEAEA',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
    margin: "auto",
    marginBottom: 45,
    borderRadius: 5,
    maxWidth: 400,
    width: "100%",
    height: 530,
    position: 'relative',
    ".MuiButton-root": {color: "#FF0000"}
});

const StyledCardActions = styled(CardActions, {
    name: "StyledCardActions",
    slot: "Link"
})({
    position: 'absolute',
    bottom: 10,
    left: 10,
    textDecoration: 'none',
    color: "#363636",
    ".MuiButton-root": {color: "#FF0000"}
});


type ArticleType = {
    id: number,
    title: string,
    // "url": string,
    imageUrl: string,
    // "newsSite": string,
    summary: string,
    publishedAt: string,
    search: string,
}



const Article = (props: ArticleType) => {

    return (
        <StyledCard >
            <CardMedia
                component="img"
                height="217"
                image={props.imageUrl}
                alt="article image"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {new Date(props.publishedAt).toLocaleDateString("en-US",dateOptions)}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    <Highlighter
                        highlightClassName="YourHighlightClass"
                        searchWords={[props.search]}
                        autoEscape={true}
                        textToHighlight={props.title}
                    />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <Highlighter
                        highlightClassName="HighlightClass"
                        searchWords={[props.search]}
                        autoEscape={true}
                        textToHighlight={props.summary}
                    />
                </Typography>
            </CardContent>
            <StyledCardActions>
                <Link component={RouterLink} to="/article-page" color="secondary" underline="none">
                    {'Read more'}
                </Link>
            </StyledCardActions>
        </StyledCard>

    )

}

export default Article
