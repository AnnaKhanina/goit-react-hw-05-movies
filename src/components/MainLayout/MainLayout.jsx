import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './MainLayout.styled';
import { Suspense } from 'react';
import { Hearts } from 'react-loader-spinner';

const MainLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense
        fallback={
          <Hearts 
            height="80"
            width="80"
            color="tomato"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MainLayout;