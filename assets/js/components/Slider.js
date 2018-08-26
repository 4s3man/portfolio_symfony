import '../../../node_modules/tiny-slider/src/tiny-slider.scss'
import {tns} from '../../../node_modules/tiny-slider/src/tiny-slider'

var slider = tns({
  container: '.slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  autoplayButtonOutput: false,
  responsive: {
  0: {
    controls: false
  },
  576: {
    controls:true
  }
}
});
