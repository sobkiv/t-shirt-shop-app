import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './components/HomePage';
// import TShirt from './components/TShirt';
import { Provider } from 'react-redux';
import store from './store';

const theme = {
  mainColors: {
    main: '#3da96d',
    text: '#0d996d',
    dark: '#353535',
  },
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="t-shirt-shop-app/" element={<Home />} />
            {/* <Route exact path="/t-shirt/:id" element={<TShirt />} /> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
