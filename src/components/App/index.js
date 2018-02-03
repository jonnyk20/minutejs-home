import React from 'react';
import PropTypes from 'prop-types';

import LessonsContainer from 'LessonsContainer';

import 'src/assets/stylesheets/base.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ name }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>60 Second Javacript Lessons and More</h2>
      <Intro>
        A minute is way too short of time to learn some Javascript... <br />
        But it should be enough to introduce and demo a topic. After that, use
        the resouces listed with each video to learn more!
      </Intro>
      <LessonsContainer />
    </div>
  );
}

const Intro = styled.div`
  border: solid 1ps black;
`;

App.propTypes = {
  name: PropTypes.string
};

export default App;
