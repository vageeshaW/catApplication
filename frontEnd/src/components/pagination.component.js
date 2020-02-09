import React, { Component } from "react";

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    this.props.paginationHandler(i);
  }

  render() {
    const { pageSize, page, total } = this.props.pagination;

    let pages = Math.ceil(total / pageSize);

    const pageNumbers = [];
    for (let i = 1; i <= pages; i++) {
      let style = {
        backgroundColor: page === i ? "cyan" : "white",
        width: 15,
        margin: 5,
        float: "left",
        padding: "15px 20px",
        border: "2px solid #008CBA",
      };
      pageNumbers.push(
        <div
          style={style}
          key={i}
          onClick={() => {
            this.handleClick(i);
          }}
        >
          {i}
        </div>
      );
    }

    return (
      <div
        style={{
          textAlign: "center"
        }}
        id="page-numbers"
      >
        {pageNumbers}
      </div>
    );
  }
}
