import React, { Component } from "react";
import Layout from "../../layouts/Layout";
import "./About.css";
import ani from "./aniravi.jpg";
import ethan from "./ethannaluz.jpeg";
import { twitter, linkedin, github } from "./icons/export";

export default class About extends Component {
  render() {
    return (
      <Layout>
        <div className="container mb-5">
          <div className="row">
            <div id="about-text" className="text-center py-5">
              <h1>
                We started this project because founders should speak more about
                their failures.
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 offset-lg-1 col-lg-5 text-center">
              <img src={ani} className="avatar" alt="Ani Ravi" />
              <h2>
                <strong>Meme 1</strong>
              </h2>
              <h3>
                <strong>Ani Ravi</strong>
              </h3>
              <p>I'm just a guy. Check out my stuff below.</p>
              <div className="mb-5">
                <a
                  href="https://www.linkedin.com/in/aniravichandran/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="social-media-icon"
                    alt="Linkedin"
                  />
                </a>
                <a
                  href="https://github.com/aniravi24"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={github}
                    className="social-media-icon"
                    alt="Github"
                  />
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-5 text-center">
              <img src={ethan} className="avatar" alt="Ethan Naluz" />
              <h2>
                <strong>Meme 2</strong>
              </h2>
              <h3>
                <strong>Ethan Naluz</strong>
              </h3>
              <p>I left Publoft and started Loftpub</p>
              <div className="mb-5">
                <a
                  href="https://twitter.com/ethannaluz"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={twitter}
                    className="social-media-icon"
                    alt="Twitter"
                  />
                </a>
                <a
                  href="https://linkedin.com/ethannaluz"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="social-media-icon"
                    alt="Linkedin"
                  />
                </a>
                <a
                  href="https://github.com/enaluz"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={github}
                    className="social-media-icon"
                    alt="Github"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
