import React from 'react';

const AudioList = ({ list, onClick }) => {
  return (
    <div>
      {
        list.map(item => {
          return (
            <div onClick={e => onClick(item)}>
              {item.title}
            </div>
          );
        })
      }

    </div>
  );
}

export default AudioList;