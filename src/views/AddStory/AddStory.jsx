import React, { Component } from 'react'
import Layout from '../../layouts/Layout';

import { StoryForm } from '../../components/export';

export default class AddManifesto extends Component {
  render() {
    return (
      <Layout>
        <StoryForm/>
      </Layout>
    )
  }
}