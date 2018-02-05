import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const Lessons = ({ link }) => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
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
        <InstagramEmbed
          containerTagName="div"
          hideCaption
          maxWidth={320}
          onAfterRender={() => {}}
          onFailure={() => {}}
          onLoading={() => {}}
          onSuccess={() => {}}
          protocol=""
          url="https://www.instagram.com/p/Be0sa-chj3-/"
        />
      </div>
    </div>
  );
};

export default Lessons;
