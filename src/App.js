import React from 'react'
import * as BooksAPI from './data/BooksAPI'
import './App.css'
import SearchPage from './components/SearchPage';
import BookPage from './components/BookPage';

class BooksApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      showSearchPage: true
    }
  }

  componentDidMount = () => {
    BooksAPI.getAll()
      .then(res => this.setState({ books: res }))
      .catch(err => { });
  }

  clickBack = () => {
    this.setState({ showSearchPage: false })
  }

  clickSearch = () => {
    this.setState({ showSearchPage: true })
  }

  changeShelf = (changeBook, newShelf) => {
    BooksAPI.update(changeBook, newShelf);

    this.setState((state, props) => {
      const books = state.books;

      if (!books.includes(changeBook)) {
        changeBook.shelf = newShelf;
        books.push(changeBook);
      }
      else {
        books.map(book => {
          if (book.id === changeBook.id) {
            book.shelf = newShelf
          }

          return book;
        })

      }


      return { books }
    })

  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        {this.state.showSearchPage
          ? (
            <SearchPage clickBack={this.clickBack} books={books} changeShelf={this.changeShelf} />
          )
          : (
            <BookPage
              books={books}
              clickSearch={this.clickSearch}
              changeShelf={this.changeShelf}
            />
          )}
      </div>
    )
  }
}

export default BooksApp
