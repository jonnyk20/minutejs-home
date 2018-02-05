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
          url="https://www.instagram.com/p/Beza7dkB_lK/"
        />
      </div>
    </div>
  );
};

export default Lessons;
