import React from "react";
import tombstone from "../../assets/img/tombstone.svg";

export default function StoryInfo(props) {
  return (
    <div className="container px-5 pb-5">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          {props.questions.map((question, key) => {
            if (!question.indexOf("Startup Name")) {
              return (
                <div key={key}>
                  <img
                    src={tombstone}
                    className="mx-auto my-4 d-block"
                    style={{ width: "7.5rem" }}
                    alt="tombstone"
                  />
                  <h1 className="mb-4 text-center">{props.responses[key]}</h1>
                </div>
              );
            }
            return (
              <p key={key}>
                <strong>{question}: </strong>
                {props.responses[key]}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
