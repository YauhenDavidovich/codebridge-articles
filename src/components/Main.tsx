import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import ArticlePage from "./ArticlePage";


const Main = () => {
    return (
        <Routes >
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/article/:articleId' element={<ArticlePage/>}/>
            {/*<Route path='/404' element={<NotFound/>}/>*/}
            {/*<Route path="*" element={<Navigate to="/404" />}/>*/}
        </Routes>
    )
}

export default Main;
