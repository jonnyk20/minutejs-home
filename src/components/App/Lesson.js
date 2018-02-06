import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Lesson = ({ lesson: { title, link, resources } }) => {
  const renderResources = () => {
    return resources.map(({ anchorText, link }, i) => {
      return (
        <div key={i}>
          <a href={link}>{anchorText}</a>
        </div>
      );
    });
  };
  return (
    <LessonContainer>
      <div>
        <InstagramEmbed
          containerTagName="div"
          hideCaption
          maxWidth={400}
          onAfterRender={() => {}}
          onFailure={() => {}}
          onLoading={() => {}}
          onSuccess={() => {}}
          protocol=""
          url={link}
        />
      </div>
      <div>
        {resources.length > 0 && (
          <div>
            <h4> Learn More </h4>
            {renderResources()}
          </div>
        )}
      </div>
    </LessonContainer>
  );
};

const LessonContainer = styled.div`
  padding: 5px;
  margin: 5px;
  border: solid 1px #eee;
  border-radius: 10px;
  background-color: #d7ebff;
`;

Lesson.propTypes = {
  lesson: PropTypes.object,
  link: PropTypes.string,
  resources: PropTypes.array,
  title: PropTypes.string
};

export default Lesson;
