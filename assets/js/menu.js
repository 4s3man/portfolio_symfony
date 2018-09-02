import $ from 'jquery'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import KubaCarousel from './components/KubaCarousel'



var slides = [
  {
    src: './img/Nightfall.png',
  },
  {
    src: './img/Nightfall.png',
  },
  {
    src: './img/Nightfall.png',
  },
  {
    src: './img/Nightfall.png',
  },
  {
    src:'./img/doCv.png'
  }
];

ReactDOM.render(<KubaCarousel slides={slides} />, $('#carousel')[0]);

import 'slicknav/dist/jquery.slicknav.min.js'
import 'slicknav/dist/slicknav.min.css'
import  '../scss/homepage.scss'


$(() => {
    $('#menu').slicknav({
      label:''
    });
});
