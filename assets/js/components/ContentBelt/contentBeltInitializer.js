import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ContentBelt from './index'
import $ from 'jquery'

var controls = {
  i: '#I'
};


ReactDOM.render(
  <ContentBelt controls={controls} />,
  document.getElementById('contentBelt')
);
