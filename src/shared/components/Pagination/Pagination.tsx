import React from 'react';
import {IoIosArrowRoundBack, IoIosArrowRoundForward} from "react-icons/io";
import {cn} from "../../utils";
import {TPagination} from "./types/pagination.types";
import Section from "../Section/Section";

const Pagination: React.FC<TPagination> = ({currentPage, onClick, total, size, isLoading}) => {

    const totalCountPage = Math.ceil(total / size)
    const pages = [];
    for (let i = 1; i<= totalCountPage; i++) {
        pages.push(i)
    }
    const prevPageHandler = () => {
        onClick(currentPage - 1)
    }
    const nextPageHandler = () => {
        onClick(currentPage + 1)
    }

    const onClickPageHandler = (page: number) => {
        onClick(page)
    }
    return <Section name={"pagination"}>
        <div className="pagination__body">
            <button disabled={currentPage === 1 || isLoading} onClick={prevPageHandler} className="pagination__btn">
                <IoIosArrowRoundBack/></button>
            {pages.map((page) => <button disabled={isLoading} key={page} onClick={() => onClickPageHandler(page)}
                                         className={cn("pagination__btn", {
                                             "active": currentPage === page && !isLoading
                                         })}>{page}</button>)}
            <button disabled={currentPage === totalCountPage || isLoading} onClick={nextPageHandler}
                    className="pagination__btn"><IoIosArrowRoundForward/></button>
        </div>
    </Section>
};

export default Pagination;