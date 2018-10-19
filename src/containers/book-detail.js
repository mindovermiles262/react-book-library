import React, { Component } from 'react';
import { connect } from 'react-redux';
import './book-detail.css'

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return ( 
      <div className="book-detail col col-sm-8">
        <h2>Select a book to get started...</h2>
      </div>
      );
    } 

    return (
      <div className="book-detail col col-sm-8">
        <h3>Details for:</h3>
        <div>
          <p>Title: {this.props.book.title}</p>
          <p>Pages: {this.props.book.pages}</p>
        </div>
      </div>
    )
    
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);