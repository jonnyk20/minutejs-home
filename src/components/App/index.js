import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LessonsContainer from './LessonsContainer';

import 'src/assets/stylesheets/base.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ name }) {
  return (
    <div className="container text-center mt-5">
      <h1>{name}</h1>
      <h4>Javacript Lessons in 60 Seconds</h4>
      <Intro>
        A minute is way too short of time to learn some Javascript... <br />
        ..but it's just enough to introduce some fun and useful topics. Each
        video has links to free resources where you can learn more. Enjoy!
        <div>
          I'm these videos every day on{' '}
          <a href="https://www.instagram.com/minutejs/">Instagram</a> and
          <a href="https://www.youtube.com/channel/UC8Ti7Y7PQhNCnHk5jHmoCDA">
            Youtube
          </a>!
        </div>
      </Intro>
      <LessonsContainer />
    </div>
  );
}

const Intro = styled.div`
  border: none;
`;

App.propTypes = {
  name: PropTypes.string
};

export default App;
