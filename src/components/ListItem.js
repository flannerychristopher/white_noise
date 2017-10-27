import React from 'react';
import '../App.css';

const ListItem = ({ item, onClick, activeItem }) => {
  return (
    <div
      onClick={e => onClick(item)}
      className={activeItem === item.file ? 'audioCurrent' : ''}
    >
      {item.title}
    </div>
  );
}

export default ListItem;
