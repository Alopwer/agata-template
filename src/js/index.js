import '../styles/styles.scss'
import LazyLoad from 'vanilla-lazyload'
import fullpage from 'fullpage.js'

new fullpage('#fullpage', {
    autoScrolling: true,
	scrollHorizontally: true
});

var myLazyLoad = new LazyLoad()
myLazyLoad.update()