import React, { Component } from "react";
import axios from "axios";

import Filter from "../components/filter.component";
import Pagination from "../components/pagination.component";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      filters: {
        search: "",
        sortBy: "name",
        sortOrder: "ASC"
      },
      pagination: {
        total: 0,
        page: 1,
        pageSize: 10
      }
    };
    this.searchBreeds = this.searchBreeds.bind(this);
    this.getBreeds = this.getBreeds.bind(this);
    this.paginationHandler = this.paginationHandler.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/breeds")
      .then((response) => {
        this.setState({
          breeds: response.data.data,
          pagination: response.data.pagination
        });
      })
      .catch((error) => {
        alert(error);
      });
  }

  searchBreeds(obj) {
    this.setState(
      {
        filters: obj
      },
      () => {
        this.getBreeds();
      }
    );
  }

  getBreeds() {
    const { search, sortBy, sortOrder } = this.state.filters;
    const { page, pageSize } = this.state.pagination;
    let url =
      "http://localhost:4000/breeds?page=" +
      page +
      "&pageSize=" +
      pageSize +
      "&";

    if (search !== undefined && search !== "") {
      url += "q=" + search + "&";
    }
    if (sortBy) {
      url += "sortBy=" + sortBy + "&";
    }
    if (sortOrder) {
      url += "sortOrder=" + sortOrder + "&";
    }

    axios
      .get(url)
      .then((response) => {
        this.setState({
          breeds: response.data.data,
          pagination: response.data.pagination
        });
      })
      .catch((error)=> {
        alert(error);
      });
  }

  paginationHandler(id) {
    const { pagination } = this.state;

    this.setState(
      {
        pagination: {
          ...pagination,
          page: id
        }
      },
      () => {
        this.getBreeds();
      }
    );
  }

  render() {
    const { breeds, pagination } = this.state;

    return (
      <div>
        <Filter search={this.searchBreeds} />
        <h3>Breed List</h3> <h4>{pagination.total} records found </h4>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th key={1}>Name</th>
              <th key={2}>Adaptability</th>
              <th key={3}>Affection Level</th>
              <th key={4}>Child friendly</th>
              <th key={5}>Description</th>
              <th key={6}>Energy Level</th>
              <th key={7}>Weight-Imperial</th>
              <th key={8}>Weight- Metric</th>
              <th key={9}>Stranger Friendly</th>
            </tr>
          </thead>

          <tbody>
            {breeds.map((breed, i) => {
              return (
                <tr key={i}>
                  <td key={1}>{breed.name}</td>
                  <td key={2}>{breed.adaptability}</td>
                  <td key={3}>{breed.affection_level}</td>
                  <td key={4}>{breed.child_friendly}</td>
                  <td key={5}>{breed.description}</td>
                  <td key={6}>{breed.energy_level}</td>
                  <td key={7}>{breed.weight.imperial}</td>
                  <td key={8}>{breed.weight.metric}</td>
                  <td key={9}>{breed.stranger_friendly}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          pagination={pagination}
          paginationHandler={this.paginationHandler}
        />
      </div>
    );
  }
}
