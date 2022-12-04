import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage';
import ItemPage from './pages/ItemPage';
import Header from './components/header.js';
import Footer from './components/footer.js';
import styled from 'styled-components'


function App() {
  return (
    <Router>
      <Page>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage itemsList={itemsList}/>}>
          </Route>
          <Route path ="/catalog"element={<CatalogPage itemsList={itemsList}/>}>
          </Route>
          <Route exact path="/item/:id" element={<ItemPage itemsList={itemsList}/>}>
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

const itemsList = [
  {
    id:1,
    header: "'Hotel Cal'",
    stars:'5',
    country: 'Russia',
    text: '5 star hotel',
    price: 10,
    img: 'https://media.radissonhotels.net/image/metropolitan-hotel-sofia-a-member-of-radisson-individuals/exteriorview/16256-145921-f72742573_3xl.jpg?impolicy=Card&amp;gravity=North'
},
{
    id:2,
    header: 'Hotel If',
    stars:'4',
    country: 'Korea',
    text: "4.5 star hotel",
    price: 20,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvB2G6VftBSj1aMWISEziN_NoSXwcL0AAhx0jxWy5FqgfaxWDYNW5tQWeKAciSMs0aduc&usqp=CAU'
},
{
    id:3,
    header: 'Hotel Or',
    stars:'4',
    country: 'Urugvai',
    text: '4 star hotel',
    price: 30,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8YJIIfs72AijwqiiYPWTSlKBsKepW-BdSNMMckY-h9j3-H8o712Al7tra3zCb1fm2BY&usqp=CAU'
},
{
    id:4,
    header: 'Hotel Ni',
    stars:'4',
    country: 'Ukraine',
    text: '3.5 star hotel',
    price: 40,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RY6c7YTvvmVVjku2sokaiUJFd-R0wP7k3QzUwkVqG1PMOSvO6fTk32gk4MOe-ffLg30&usqp=CAU'
},
{
    id:5,
    header: 'Hotel AAAAAAAA',
    stars:'3',
    country: 'Ukraine',
    text: "3 star hotel",
    price: 50,
    img: 'https://pesweb.azureedge.net/spimg/hotelphotos/4-star-hotel-buenos-aires-outside.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=70&w=1440&h=680&mode=crop'
},
{
    id:6,
    header: 'Hotel X',
    stars:'3',
    country: 'Ukraine',
    text: "Very creative",
    price: 60,
    img: 'https://pix10.agoda.net/hotelImages/592/59230/59230_1112211039005277796.jpg?ca=0&ce=1&s=1024x768'
}

]