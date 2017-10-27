import React from 'react';
import '../App.css';

const Message = ({ audioCurrent }) => {
  return (
    <div className="Message">
      {audioCurrent.title ? 'now looping: ' + audioCurrent.title : ''}
    </div>
  );
}

export default Message;