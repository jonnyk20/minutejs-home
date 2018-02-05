import React from 'react';
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
    resources: []
  }
];

const LessonsContainer = () => {
  return (
    <div>
      <div>
        <Lesson />
      </div>
    </div>
  );
};

export default LessonsContainer;
