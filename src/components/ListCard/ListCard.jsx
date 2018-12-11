import React from 'react';
import { Link } from 'react-router-dom';
import './ListCard.css';
import tombstone from '../../assets/img/tombstone.svg';

export default function ListCard(props) {
  return (
    <div className="container">
      <h1 className="text-center mb-5 mx-2">Here are some companies! <br></br>Click on a card to read more.</h1>
      <div className="row cards-wrapper justify-content-center">
        {props.data.map((company, key) => {
          const path = `/story/${company._id}`;
          // Store given question object in fields array
          let questions = props.schema
          // Store given answer object in answers array
          let answers = Object.values(company)
          answers.shift()
          let jsxElements = [];
          let chunk = [];
          for (let i = 0; i < questions.indexOf("Solution") + 1 ; i++) {
            let question = questions[i];
            // Add new question/answer pair to the card
            chunk.push(
              <p key={i}><strong>{question}: </strong>{answers[i]}</p>
            )
          }
          // Create a new card
          jsxElements.push(
            <Link key={key} to={path} className="card col-10 col-md-3 m-4">
              <div>
                <img src={tombstone} className="my-4" style={{width: '5rem'}} alt="tombstone"/>
                {chunk}
              </div>
            </Link>
          );
          return jsxElements;
        })}
      </div>
    </div>
  )
}