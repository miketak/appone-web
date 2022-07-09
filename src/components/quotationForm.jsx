import React, { Component } from "react";
import { useParams } from "react-router-dom";

const QuotationForm = ({ history }) => {
  let { id: quotationId } = useParams();
  console.log(history);

  return (
    <div>
      <h1>Quotation Form {quotationId} </h1>;
      <button className="btn btn-primary">Save</button>
    </div>
  );
};

export default QuotationForm;
