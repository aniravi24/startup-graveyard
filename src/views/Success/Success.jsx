import React, { Component } from "react";
import Layout from "../../layouts/Layout";
import { Redirect } from "react-router-dom";

export default class Success extends Component {
  constructor() {
    super();
    this.state = {
      redirect: undefined
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        redirect: <Redirect from="/success" to="/" />
      });
    }, 3000);
  };

  render() {
    return (
      <Layout>
        <div className="container" style={{ height: "100%" }}>
          <div className="row m-5">
            <div className="col-12 w-100">
              <h1 className="text-center">Successful Form Submission!</h1>
              <h4 className="text-center">
                If you are not redirected in 3 seconds, just click on the "Home"
                tab.
              </h4>
              {this.state.redirect}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
