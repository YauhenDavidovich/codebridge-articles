import React from "react";
import {TextField, Typography} from "@mui/material";
import {styled} from "@mui/system";

type SearchPropsType = {
    setSearchTerm: (e: string) => void
    results: number
}


const StyledTextField = styled(TextField, {
    name: "StyledTextField",
    slot: "Search"
})({
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
    borderRadius: 5,
});


const Search = (props: SearchPropsType) => {
    return (
        <div className="search">
            <Typography variant="subtitle2" color="text.secondary">
                Filter by keywords
            </Typography>
            <StyledTextField id="outlined-basic" label="🔍 Search" variant="outlined" fullWidth margin={"normal"}
                       onChange={(e) => props.setSearchTerm(e.target.value)}
            />
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Results: {props.results} articles
            </Typography>
        </div>
    );
}

export default Search;
