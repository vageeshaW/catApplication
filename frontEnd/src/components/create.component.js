import React, { Component } from "react";
import axios from "axios";

export default class CreateBreed extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.populateBreeds = this.populateBreeds.bind(this);

    this.state = {
      name: "",
      adaptability: "",
      affection_level: "",
      child_friendly: "",
      description: "",
      energy_level: "",
      weight_imp: "",
      weight_met: "",
      stranger_friendly: ""
    };
  }

  onChange(e) {
    let obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  }

  onSubmit(e) {
    e.preventDefault();
    const newItem = {
      name: this.state.name,
      adaptability: this.state.adaptability,
      affection_level: this.state.affection_level,
      child_friendly: this.state.child_friendly,
      description: this.state.description,
      energy_level: this.state.energy_level,
      weight: {
        imperial: this.state.weight_imp,
        metric: this.state.weight_met
      },
      stranger_friendly: this.state.stranger_friendly
    };

    axios
      .post("http://localhost:4000/breeds/add", newItem)
      .then((res) =>{alert('Data added');})
      .catch((error)=> {
        alert(error);
      });

    this.props.history.push("/");

    this.setState({
      name: "",
      adaptability: "",
      affection_level: "",
      child_friendly: "",
      description: "",
      energy_level: "",
      weight_imp: "",
      weight_met: "",
      stranger_friendly: ""
    });
  }

  populateBreeds() {
    axios
      .get("http://localhost:4000/breeds/feedData")
      .then((response) => {
        this.props.history.push("/");
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Breed</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label>Adaptability: </label>
            <input
              type="text"
              className="form-control"
              name="adaptability"
              onChange={this.onChange}
              value={this.state.adaptability}
            />
          </div>
          <div className="form-group">
            <label>Affection Level: </label>
            <input
              type="text"
              className="form-control"
              name="affection_level"
              onChange={this.onChange}
              value={this.state.affection_level}
            />
          </div>
          <div className="form-group">
            <label>Child Friendly: </label>
            <input
              type="text"
              className="form-control"
              name="child_friendly"
              onChange={this.onChange}
              value={this.state.child_friendly}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={this.onChange}
              value={this.state.description}
            />
          </div>
          <div className="form-group">
            <label>Energy Level: </label>
            <input
              type="text"
              className="form-control"
              name="energy_level"
              onChange={this.onChange}
              value={this.state.energy_level}
            />
          </div>
          <div className="form-group">
            <label>Weight: </label>
            <input
              type="text"
              placeholder="Imperial"
              name="weight_imp"
              className="form-control"
              onChange={this.onChange}
              value={this.state.weight_imp}
            />
            <input
              type="text"
              placeholder="Metric"
              name="weight_met"
              className="form-control"
              onChange={this.onChange}
              value={this.state.weight_met}
            />
          </div>
          <div className="form-group">
            <label>Stranger Friendly: </label>
            <input
              type="text"
              className="form-control"
              name="stranger_friendly"
              onChange={this.onChange}
              value={this.state.stranger_friendly}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="SAVE" className="btn btn-primary" />
          </div>
        </form>

        <div className="form-group">
          <h2>Populate breeds from Cat API</h2>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.populateBreeds}
          >
            POPULATE
          </button>
        </div>
      </div>
    );
  }
}
