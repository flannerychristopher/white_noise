import React, { Component } from 'react';
import ListItem from './ListItem';
import '../App.css';

export default class AudioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null
    }
  }

  handleClick(listItem) {
    console.log(listItem)
    this.setState({ activeItem: listItem.file });
    this.props.onClick(listItem);
  }

  renderList() {
    return (
      this.props.list.map((item, i) => {
        return (
          <ListItem
            key={i}
            item={item}
            onClick={this.handleClick.bind(this)}
            activeItem={this.state.activeItem}
          />
        );
      })
    );
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}
