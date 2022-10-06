import React from "react";

import Button from "../Button";

import s from "./style.module.scss";

const Pagination = ({ pageCount = 0, currentPage = 0, onPageClick }) => {
  const arr = new Array(pageCount).fill("");

  return (
    <div className={s.root}>
      {arr.map((_, index) => {
        const pageNumber = index + 1;

        return (
          <Button
            key={index}
            disabled={pageNumber === currentPage}
            onClick={() => onPageClick(pageNumber)}>
            {pageNumber}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;
