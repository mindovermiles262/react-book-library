import React, { Component } from 'react';
import './App.css';

import BookList from '../containers/book-list'

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />  
      </div>
    );
  }
}