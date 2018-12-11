import React, { Component } from 'react';
import Layout from '../../layouts/Layout';
import { ListCard, Hero } from '../../components/export';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      baseUrl: process.env.REACT_APP_SITEURL,
      schema: ['Startup Name', 'Founder Name', 'Industry', 'Solution',
        'Start Date', 'End Date', 'Reason For Failure',
        'More Details', 'Founder Contact']
    }
  }
  
  componentDidMount() {
    fetch(`${this.state.baseUrl}/api/home`)
    .then((res) => {
      return res.json();
    })
    .then((myJson) => {
      let cleansedData = myJson.responses
      this.setState({data: cleansedData})
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <Layout>
        <Hero/>
        <ListCard data={this.state.data} schema={this.state.schema}/>
      </Layout>
    );
  }
}