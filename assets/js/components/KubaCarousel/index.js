import React, { Component } from 'react'

const Slide = (style, src, key) => {
    return (
      <div
       className='slider__slide'
       style={style}
       key={key}
       >
        <img className="slider__img" src={src} alt=""/>
      </div>
    );
  }

export default class KubaCarousel extends Component{
  constructor(props, context){
    super(props);
    if (!props.slides || !Array.isArray(props.slides)) {
      console.log('You need to pass slider array as to element like slides=\{[]\}');
    }
    this.spacing = 20;
    this.state = {
      hasError: false,
      slides:props.slides
    }
  }

  nextSlide(){
    let slides = [...this.state.slides];
    slides.unshift(slides.pop());
    this.setState({slides:slides});
  }

  prevSlide(){
      let slides = [...this.state.slides];
      slides.push(slides.shift());
      this.setState({slides:slides});
  }

  // componentDidMount(){
  //   this.timerId = setInterval(
  //     () => {
  //       this.nextSlide();
  //     },
  //     1000
  //   );
  // }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  createSlides(elements){
    let slides = [],
    middle = Math.ceil(elements.length/2);

    for(let i=0; i<elements.length; i++){
      let currentStyle = {
        zIndex: i<middle ? i+1 : elements.length - i,
        top: (middle-i-1)*this.spacing
      };
      slides = [
        ...slides,
        Slide(currentStyle, elements[i].src, i)
      ];
    }

    return slides;
  }

  render(){
    var style = {
      background: 'black',
      zIndex: 3
    };
    return (
      <div className='slider' id='KubaCarousel' onWheel={(e)=>{
        e.deltaY>0 ? this.nextSlide() : this.prevSlide();
      }}>
        <div className="slider__view">
          {this.createSlides(this.state.slides)}
        </div>
      </div>
    );
  }
}
