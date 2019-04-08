import React,{Component} from "react"
import {Jumbotron} from "react-bootstrap"
import { render } from 'react-dom';
import Typed from 'react-typed';

class MyComponent extends Component {
  render() {
      return (
          <Jumbotron fluid>
              <Typed 
                  strings={['Here you can find anything', "hiii"]} 
                  typeSpeed={40} 
                  loop='true'
              />
          </Jumbotron>
      );
  }
}

export default MyComponent