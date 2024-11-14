import React from "react";
import sytles from "./page-header.module.scss";

const PageHeader = ({ title }) => {
  return (
    <h1 className= {sytles.pageHeader}>
      <span>{title} </span>
    </h1>   
  );
};

export default PageHeader;
