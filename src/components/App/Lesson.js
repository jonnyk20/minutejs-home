import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const Lessons = () => {
  return (
    <div>
      Lesson
      <div>
        <InstagramEmbed
          containerTagName="div"
          hideCaption
          maxWidth={320}
          onAfterRender={() => {}}
          onFailure={() => {}}
          onLoading={() => {}}
          onSuccess={() => {}}
          protocol=""
          url="https://www.instagram.com/p/BcIH0s0jVJt/"
        />
      </div>
    </div>
  );
};

export default Lessons;
