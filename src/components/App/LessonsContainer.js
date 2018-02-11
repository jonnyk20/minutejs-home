import React, { Component } from 'react';
import Lesson from './Lesson';

const lessons = [
  {
    id: 1,
    title: 'Hello World',
    link: 'https://www.instagram.com/p/Beza7dkB_lK/',
    resources: []
  },
  {
    id: 2,
    title: 'ES6 Arrow Functions',
    link: 'https://www.instagram.com/p/Be0sa-chj3-/',
    resources: [
      {
        anchorText: 'MDN Documentation',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions'
      },
      {
        anchorText: 'Sitepoint Article',
        link:
          'https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/'
      }
    ]
  },
  {
    id: 3,
    title: 'ES6 Arrow Functions pt. 2 Scoping',
    link: 'https://www.instagram.com/p/Be3NxqNBzlZ/',
    resources: [
      {
        anchorText: 'MDN Documentation',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions'
      },
      {
        anchorText: 'Learn ES6 The Dope Way Part II: Arrow functions and the ‘this’ keyword',
        link:
          'https://medium.freecodecamp.org/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881'
      }
    ]
  },
  {
    id: 4,
    title: 'ES6 Object Destructuring',
    link: 'https://www.instagram.com/p/Be51G17hZDu/',
    resources: [
      {
        anchorText: 'A Dead Simple Intro to Destcructuring Javascript Objects (Wes Bos)',
        link:
          'http://wesbos.com/destructuring-objects/'
      },
      {
        anchorText: 'Exploring JS: Object Destructuring',
        link:
          'http://exploringjs.com/es6/ch_destructuring.html#_object-destructuring'
      }
    ]
  },
  {
    id: 5,
    title: 'ES6 Nested Object Destructuring',
    link: 'https://www.instagram.com/p/Be8Xeu0Buw8/',
    resources: [
      {
        anchorText: 'Destructuring Nested Objects',
        link:
          'https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8'
      },
      {
        anchorText: 'MDN Documentation',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring'
      }
    ]
  },
  {
    id: 6,
    title: 'ES6 Parameter Destructuring',
    link: 'https://www.instagram.com/p/Be_C3H9Bu3x/',
    resources: [
      {
        anchorText: 'Destructuring and parameter handling in ECMAScript 6',
        link:
          'http://2ality.com/2015/01/es6-destructuring.html'
      }
    ]
  },
  {
    id: 7,
    title: 'ES6 Default Parameters',
    link: 'https://www.instagram.com/p/BfB0g7Khw80/',
    resources: [
      {
        anchorText: 'MDN Docs - Default Parameters',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters'
      },
      {
        anchorText: 'CSS Tricks - Using Default Parameters in ES6',
        link:
          'https://css-tricks.com/using-default-parameters-es6/'
      }
    ]
  },
  {
    id: 8,
    title: 'ES6 Array Destructuring',
    link: '',
    resources: [
      {
        anchorText: 'MDN Docs - Destructuring Assignment',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'
      },
      {
        anchorText: 'ES6: Destructuring — an elegant way of extracting data from arrays and objects in JavaScript',
        link:
          'http://www.deadcoderising.com/2017-03-28-es6-destructuring-an-elegant-way-of-extracting-data-from-arrays-and-objects-in-javascript/'
      }
    ]
  }
];

class LessonsContainer extends Component {
  state = {
    isLoaded: false
  };
  componentWillMount() {
    this.loadInstagram();
  }

  loadInstagram = () => {
    if (!window.instgrm) {
      const s = document.createElement('script');
      s.async = s.defer = true;
      s.src = 'https://platform.instagram.com/en_US/embeds.js';
      s.id = 'react-instagram-embed-script';
      s.onload = this.onLoad;
      const body = document.body || null;
      if (body) {
        body.appendChild(s);
      }
    }
  };

  onLoad = () => {
    console.log('Loaded instagram');
    this.setState({
      isLoaded: true
    });
  };

  renderLessons = () => {
    return lessons.sort((a, b) => b.id - a.id).map(lesson => {
      return (<Lesson
        key={lesson.id}
        lesson={lesson}
              />);
    });
  };

  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>{this.renderLessons()}</div>
      </div>
    );
  }
}

export default LessonsContainer;
