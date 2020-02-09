import React, { Component } from "react";

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      sortBy: "name",
      sortOrder: "ASC"
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    let obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.search(this.state);
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label for="">Seach By:</label>
            <input
              name="search"
              onChange={this.onChange}
              value={this.state.name}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="">Sort By:</label>

            <select
              name="sortBy"
              id=""
              onChange={this.onChange}
              value={this.state.sortBy}
              className="form-control"
            >
              <option value="name">Name</option>
              <option value="adaptability">adaptability</option>
            </select>
          </div>

          <div className="form-group">
            <label for="">Sort In:</label>

            <select
              name="sortOrder"
              onChange={this.onChange}
              id=""
              value={this.state.sortOrder}
              className="form-control"
            >
              <option value="ASC">Accending</option>
              <option value="DESC">Decending</option>
            </select>
          </div>
          <div className="form-group">
            <input type="submit" value="SEARCH" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
