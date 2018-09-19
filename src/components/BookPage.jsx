import React, { Component } from 'react';
import Shelf from './Shelf';
import { Link } from 'react-router-dom'

const styles = {
  header: {
    backgroundColor: 'red'
  }
}

export default class BookPage extends Component {


  putBooksOnShelf = (books) => {

    const currently = books.filter(book => book.shelf === 'currentlyReading');
    const want = books.filter(book => book.shelf === 'wantToRead');
    const read = books.filter(book => book.shelf === 'read');

    return [
      {type: 'Currently Reading', books: currently},
      {type: 'Want To Read', books: want},
      {type: 'Read', books: read},
    ]
  }  

  render() {

    const { clickSearch, books, changeShelf } = this.props;
    const shelves = this.putBooksOnShelf(books);

    return (
      // Start BookPage
      <div className="list-books">
        <div style={styles.header} className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => <Shelf key={shelf.type} shelf={shelf} changeShelf={changeShelf}/>)}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
      // End
    )
  }
}
