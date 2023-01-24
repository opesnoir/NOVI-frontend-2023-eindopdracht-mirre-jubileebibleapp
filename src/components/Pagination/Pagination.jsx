import React from 'react';
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Pagination.module.css";

const Pagination = ({totalPost, postPerPage, setCurrentPage, currentPage}) => {
    // array to store page numbers
    let pages = []

    // loop through number of pages and give page numbers to array
    for(let i = 1; i <= Math.ceil(totalPost/postPerPage); i++){
        pages.push(i)
    }
    //check for errors
    /*console.log(pages);
    console.log(styles);*/

    return (
        <>
            <Wrapper>
                {pages.map((page, index)=> {
                    return <button
                        key={index}
                        onClick={()=> setCurrentPage(page)}
                        className={page === currentPage ? styles.active : " "}
                    >{page}</button>
                })}
            </Wrapper>
        </>
    );
};

export default Pagination;