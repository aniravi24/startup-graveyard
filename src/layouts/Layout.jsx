import React, { Component } from 'react'
import { Navbar, Footer } from '../components/export';
import routes from '../routes/routes';
import './Layout.css';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return(
      <div>
        <Navbar color="gray" textColor="white" routes={routes}/>
        <div>
          {this.props.children}
        </div>
        <Footer routes={routes}/>
      </div>
    )
  }
}