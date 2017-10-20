/**
 * Created by mfpinheiro on 19/10/17.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css'

export default class Howdy extends Component {
  render () {
    return (
      <div>
        Hi from React!
      </div>
    )
  }
}

render (<Howdy/>, document.getElementById('app'));