import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookItem from './BookItem';
import { getBooks } from '../../actions/bookActions';

const Dashboard = ({ book: { books }, getBooks }) => {
  useEffect(() => {
    getBooks();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <div class="container">
        <h1 className="text-white">Your Books</h1>
        <div className="row">
          {books.length === 0 ? (
            <p>No Books to show</p>
          ) : (
            books.map(book => (
              <div className="col-sm">
                <BookItem book={book} key={book.id} />
              </div>
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
};
Dashboard.propTypes = {
  book: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  book: state.book
});
export default connect(mapStateToProps, { getBooks })(Dashboard);
