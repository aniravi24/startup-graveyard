import React, { Component } from 'react';
import Layout from '../../layouts/Layout';
import { StoryInfo } from '../../components/export'

export default class Story extends Component {
  constructor(props) {
    super(props)
    this.state = {
      baseUrl: process.env.REACT_APP_SITEURL,
      questions: ['Startup Name', 'Founder Name', 'Industry', 'Solution',
        'Start Date', 'End Date', 'Reason For Failure',
        'More Details', 'Founder Contact'],
      id: this.props.match.params.id,
      responses: []
    }
  }

  componentDidMount() {
    const id = this.state.id;
    fetch(`${this.state.baseUrl}/api/story/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        let response = myJson.response
        let cleansedData = Object.values(response)
        cleansedData.shift()
        this.setState({ responses: cleansedData })
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Layout>
        <StoryInfo responses={this.state.responses} questions={this.state.questions}/>
      </Layout>
    );
  }
}