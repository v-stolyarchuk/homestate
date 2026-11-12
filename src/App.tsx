import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Contacts } from './pages/Contacts';
import { Cart } from './pages/Cart';
import { Favourites } from './pages/Favourites';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
