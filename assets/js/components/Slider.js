import '../../../node_modules/tiny-slider/src/tiny-slider.scss'
import {tns} from '../../../node_modules/tiny-slider/src/tiny-slider'

var slider = tns({
  container: '.slider',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  autoplayButtonOutput: false,
  responsive: {
    640: {
      items: 1
    },
    700: {
    },
    900: {
      items: 1
    }
  }
});
