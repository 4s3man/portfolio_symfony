import React from 'react'
import ReactDOM from 'react-dom'
import KubaCarousel from './components/KubaCarousel/index.js'
import './components/KubaCarousel/style.scss'

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
