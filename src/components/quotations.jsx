import React, { Component } from "react";
import { getQuotations } from "../services/fakeQuotationService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import QuotationsTable from "./quotationsTable";
import _ from "lodash";

class Quotations extends Component {
  state = {
    quotations: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    // const { data } = await getQuotations();
    // this.setState({quotations: data})
    this.setState({ quotations: getQuotations() });
  }

  handleDelete = (movie) => {
    const quotations = this.state.quotations.filter((m) => m._id !== movie._id);
    this.setState({ quotations });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      quotations: allQuotations,
    } = this.state;

    const sorted = _.orderBy(
      allQuotations,
      [sortColumn.path],
      [sortColumn.order]
    );

    const quotations = paginate(sorted, currentPage, pageSize);

    return { totalCount: allQuotations.length, data: quotations };
  };

  render() {
    const { length: count } = this.state.quotations;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const { totalCount, data: quotations } = this.getPagedData();

    return (
      <React.Fragment>
        <p>Showing {totalCount} movies in the database</p>
        <QuotationsTable
          quotations={quotations}
          sortColumn={sortColumn}
          onDelete={this.handleDelete}
          onSort={this.handleSort}
        />
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Quotations;
