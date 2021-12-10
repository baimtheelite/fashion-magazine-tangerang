import React from "react";
import CategoryCard from "../CategoryCard";

export default function SideWidget() {
  return (
    <div className="col-lg-4">
      <div className="card mb-4">
        <div className="card-header">Search</div>
        <div className="card-body">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Enter search term..."
              aria-label="Enter search term..."
              aria-describedby="button-search"
            />
            <button
              className="btn btn-primary"
              id="button-search"
              type="button"
            >
              Go!
            </button>
          </div>
        </div>
      </div>
      <CategoryCard />
      <div className="card mb-4">
        <div className="card-header">Side Widget</div>
        <div className="card-body">
          You can put anything you want inside of these side widgets. They are
          easy to use, and feature the Bootstrap 5 card component!
        </div>
      </div>
    </div>
  );
}
