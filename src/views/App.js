import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import {Button} from 'antd';
import PropTypes from "prop-types";

export default class App extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  render() {
  return (
    <div>
       链接： 
        <Link to="/App/home"><Button type="primary">Home</Button></Link>
        <Link to="/App/another"><Button type="primary">Another</Button></Link>
      <div>
        <button onClick={() =>{
          this.context.router.history.push("/App/another");
          }}>Click me to another file~</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{ this.props.children}</div>
    </div>
  )
}
}
