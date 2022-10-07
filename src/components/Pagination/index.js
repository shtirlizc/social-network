import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";

import s from "./style.module.scss";

const Pagination = ({ onPageClick, pageCount = 0, currentPage = 0 }) => {
  const pages = [];
  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(i);
  }

  return (
    <div className={s.root}>
      {pages.map((pageNumber) => (
        <Button
          key={pageNumber}
          disabled={pageNumber === currentPage}
          onClick={() => onPageClick(pageNumber)}>
          {pageNumber}
        </Button>
      ))}
    </div>
  );
};

Pagination.defaultProps = {
  pageCount: 0,
  currentPage: 0,
};

Pagination.propTypes = {
  onPageClick: PropTypes.func.isRequired,
  pageCount: PropTypes.number,
  currentPage: PropTypes.number,
};

export default Pagination;
