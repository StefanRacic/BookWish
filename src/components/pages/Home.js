import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import brand from '../layout/brand.png';

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="container">
          <Jumbotron className="bg-light mt-5">
            <h1 className="display-1">Wish a book!</h1>
            <p className="lead">
              Welcome to platform for storing your books and making book wish
              and buying your favorite books.
            </p>
            <hr className="my-2" />
            <p>Please register if you dont have an account.</p>
            <p className="lead">
              <Button
                className="btn-lg"
                style={{ backgroundColor: '#007bff', borderRadius: '5rem' }}
              >
                <Link className="text-white" to="/register">
                  Register
                </Link>
              </Button>
            </p>
          </Jumbotron>
        </div>
      </section>
      <section className="about-us d-flex justify-content-center">
        <div className="container row align-items-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium alias praesentium iste porro explicabo omnis excepturi
            modi molestiae tenetur repellat, laborum distinctio harum. Alias
            quidem recusandae repudiandae accusamus qui quos sapiente delectus
            dolore, quod dolorum ipsam quisquam quaerat aperiam dolores, quia
            optio quis iste possimus aliquam nostrum cupiditate tenetur beatae
            eaque? Eveniet alias officia ipsa aliquid facilis amet eligendi
            consectetur dolorum ab, atque, nobis commodi quos iure modi illum
            cupiditate quisquam. Laudantium veniam dolore eveniet.
          </p>
        </div>
      </section>
      <footer className="container d-flex justify-content-between align-items-center">
        <p>
          &copy; 2017-2019 BookWish, Inc. &middot; <a href="#">Privacy</a>{' '}
          &middot; <a href="#">Terms</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
