import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PaginationPropsType = {
    currentPage: number,
    pages: number,
    setPage: (number: number) => void
}

export default function Paginator(props:PaginationPropsType) {

    const numPages = Math.ceil(props.pages / 3) ;
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        props.setPage(value);
    };

    return (
        <Stack spacing={2}>
            <Pagination count={numPages} page={props.currentPage} onChange={handleChange} />
        </Stack>
    );
}
