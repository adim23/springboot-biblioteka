var BookRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.author}</td>
      </tr>
    );
  }
});

module.exports = BookRow;
