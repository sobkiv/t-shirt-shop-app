import Title from './Title/Title';
import Header from '../Header';
import Cart from '../Cart/Cart';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Title subtitle="Please, choose your favorite T-shirt" />
      <Cart />
      {children}
    </div>
  );
};

export default MainPageLayout;
