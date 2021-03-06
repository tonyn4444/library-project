import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions';

class BookList extends Component {
  renderBookList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          className='list-group-item'
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderBookList()}
      </ul>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch )
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);