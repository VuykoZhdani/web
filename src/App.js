import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage';
import ItemPage from './pages/ItemPage';
import CartPage from "./pages/CartPage";
import Header from './components/header.js';
import Footer from './components/footer.js';
import styled from 'styled-components'


function App() {
  return (
    <Router>
      <Page>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage/>}>
          </Route>
          <Route path ="/catalog"element={<CatalogPage/>}>
          </Route>
          <Route exact path="/hotels/:id" element={<ItemPage/>}>
          </Route>
          <Route exact path="/cart" element={<CartPage/>}>
          </Route>
        </Routes>
        <Footer />
      </Page>
    </Router>
  );
}

export default App;

const Page = styled.div`
  background-color: #22223a;
`;
