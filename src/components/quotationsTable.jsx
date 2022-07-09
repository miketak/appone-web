import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

class QuotationsTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (quotation) => (
        <Link to={`/dashboard/quotations/${quotation._id}`}>
          {quotation.title}
        </Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "delete",
      content: (quotation) => (
        <button
          onClick={() => this.props.onDelete(quotation)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { quotations, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={quotations}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default QuotationsTable;
