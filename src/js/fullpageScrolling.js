import fullpage from 'fullpage.js';
import '../../node_modules/fullpage.js/dist/fullpage.min.css'

new fullpage('#fullpage', {
    autoScrolling: true,
    sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection']
});