var BooksTable = require('./BooksTable.jsx'),
    BookSearchBar = require('./BookSearchBar.jsx'),
    Store = require('../stores/Store'),
    ActionCreator = require('../actions/ActionCreator');

var BooksApp = React.createClass({
  getInitialState: function() {
    return {
      books: []
    };
  },
  componentWillMount: function() {
    Store.addChangeListener(this.onChange);
  },
  componentDidMount: function() {
    ActionCreator.getBooks();
  },
  componentWillUnmount: function() {
    Store.removeChangeListener(this.onChange);
  },
  onChange: function() {
    this.setState({
      books: Store.getBooks()
    });
  },
  render: function() {
    if (this.state.books) {
      return (
        <div className='u-full-width'>
          <BookSearchBar />
          <BooksTable books={this.state.books} />
        </div>
      );
    }
    return (
      <div className='u-full-width'>
        <BookSearchBar />
        <BooksTable books={[]}/>
      </div>
    );
  }
});

module.exports = BooksApp;
