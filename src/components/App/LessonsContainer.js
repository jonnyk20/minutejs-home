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
    return lessons.map(lesson => {
      return <Lesson key={lesson.id}
lesson={lesson} />;
    });
  };

  render() {
    return (
      <div>
        <div style={{ display: 'flex' }}>{this.renderLessons()}</div>
      </div>
    );
  }
}

export default LessonsContainer;
