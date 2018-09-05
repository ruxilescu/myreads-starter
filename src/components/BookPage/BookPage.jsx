import React from 'react';
import Shelf from '../Shelf/Shelf';

const BookPage = (props) => {
  const { bookshelf, clickSearch } = props;
  return (
    // Start Book Page
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      {/* Start BookShelf */}
      <div className="list-books-content">
        <div>

          {/* Start Shelf */}
          {bookshelf.shelves.map(shelf => <Shelf shelf={shelf} />)}
          {/* End of Shelf */}
        </div>
      </div>
      <div className="open-search">
        <a onClick={clickSearch}>Add a book</a>
      </div>
    </div>
  )
}

export default BookPage
