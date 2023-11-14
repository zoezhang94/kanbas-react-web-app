import React from "react";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
const Assignment5 = () => {

    return (
        <div className="container">
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href="https://kanbas-node-server-app-wenxi.onrender.com/a5/welcome"
                    className="list-group-item">
                    Welcome
                </a>
            </div>
            <EncodingParametersInURLs />
            <WorkingWithObjects />
            <br />
            <WorkingWithArrays />
        </div>
    );
};
export default Assignment5;