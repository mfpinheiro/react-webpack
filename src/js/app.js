/**
 * Created by mfpinheiro on 19/10/17.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css'

import Octocat from '../assets/octocat.png'

export default class Howdy extends Component {
  render () {
    return (
      <div>
        <img src={Octocat} alt="Octocat"/>
      </div>
    )
  }
}

render (<Howdy/>, document.getElementById('app'));