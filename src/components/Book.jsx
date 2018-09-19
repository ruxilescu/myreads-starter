import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Book extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      shelf: ''
    }
  }

  componentDidMount = () => {
    this.setState({shelf: this.props.book.shelf})
  }

  changeShelf = (evt) => {
    const shelf = evt.target.value;
    this.props.changeShelf(this.props.book, shelf);
    this.setState({ shelf });
  }
  
  render() {

    const { book } = this.props;
    const { shelf } = this.state;
    const { imageLinks, authors = ['unknown'], title } = book;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <BookCover imageLinks={imageLinks} />
            <div className="book-shelf-changer">
              <select value={shelf ? shelf : 'none'} onChange={this.changeShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          {authors.map(author => (<div key={author} className="book-authors">{author}</div>))}
        </div>
      </li>
    )
  }
}


const BookCover = (props) => {
  const { thumbnail } = props.imageLinks;
  return (
    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
  )
}

BookCover.defaultProps = {
  imageLinks: {
    thumbnail: ''
  }
}

BookCover.propTypes = {
  imageLinks: PropTypes.objectOf(PropTypes.string).isRequired
}

