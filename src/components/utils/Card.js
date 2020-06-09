import React from "react";
import PageSelect from "../Navigation/PageSelect";

export default function Card(props) {
  return (
    <div>
      <div className="container mx-auto card-container mt-3 pb-3 shadow-lg">
        <div className="row align-content-center">
          <div className="col">
            <div className="card text-dark bg-light">
              <div className="card-header">
                <h2>
                  ECC Magic <PageSelect />
                </h2>
              </div>
              <div className="card-body p-3">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
