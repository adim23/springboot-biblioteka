var SearchBar = React.createClass({
  render: function() {
    return (
      <form className='u-full-width'>
        <input className='u-full-width' type='text' placeholder='Szukaj...'/>
      </form>
    );
  }
});

module.exports = SearchBar;
