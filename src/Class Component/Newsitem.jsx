import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Newsitem extends Component {
  render() {
    return (
      <>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
          <div className="card" height="600px">
            <img src={this.props.pic} height="200px" className="card-img-top" alt="No Source" />
            <div className="card-body">
              <h5 className="card-title">{this.props.title.slice(0,60)+"..."}</h5>
              <hr />
              <h6 className="card-source">{this.props.source}-{`${new Date(this.props.date).getDate()}/${new Date(this.props.date).getMonth()}/${new Date(this.props.date).getFullYear()}`}</h6>
              <p className="card-text">{this.props.description.slice(0,150)+"..."}</p>
              <Link to={this.props.url} className="btn btn-primary background text-light btn-sm w-100">Read Full Article</Link>
            </div>
          </div>

        </div>

      </>
    )
  }
}