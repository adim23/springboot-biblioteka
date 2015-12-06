var BookRow = require('./BookRow.jsx');

var BooksTable = React.createClass({
  render: function() {
    var rows = this.props.books.map(function(book) {
      return (<BookRow title={book.title} author={book.author} />);
    });
    if (rows.length > 0) {
      return (
        <table className='u-full-width'>
          <thead>
            <tr>
              <th>Tytuł</th>
              <th>Autor</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
    return (
      <table className='u-full-width'>
      </table>
    );
  }
});

module.exports = BooksTable;
