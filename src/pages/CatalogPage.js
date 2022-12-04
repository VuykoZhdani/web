import {useState} from 'react'
import {ItemsContainer, ItemContainer, PriceContainer, ViewMore} from '../styles/catalog-item-style'
import {Image} from '../components/reusable'
import FilterBar from '../components/filter-bar';
export default function CatalogPage(){

    const [border, setBorder] = useState(3);
    const [items, setItems] = useState(itemsList.slice(0,border));

    function showMore(){
        setItems(itemsList.slice(0, border + 3));
        setBorder(border+3);
    }
    return(
        <div>
            <ItemsContainer>
                <FilterBar/>
                {items.map((item) => 
                    <ItemContainer key= {`Item${item.id}`}>
                        <Image img={item.img} width='200px' height='200px'/>
                        <h1>{item.header.length <45 ? item.header : item.header.substr(0,45)+'...'}</h1>
                        <div>{item.text.length <245 ? item.text : item.text.substr(0,245)+'...'}</div>
                        <PriceContainer>
                            <h1>Price:</h1>
                            <h1>{item.price} UAH</h1>
                        </PriceContainer>
                        <button>View More</button>
            </ItemContainer>
            )}

            </ItemsContainer>
            <ViewMore onClick={showMore}>View More</ViewMore>
        </div>
    );
}

const itemsList = [
    {
        id:1,
        header: 'Hotel Cal',
        text: '5 star hotel',
        price: 10,
        img: 'https://media.radissonhotels.net/image/metropolitan-hotel-sofia-a-member-of-radisson-individuals/exteriorview/16256-145921-f72742573_3xl.jpg?impolicy=Card&amp;gravity=North'
    },
    {
        id:2,
        header: 'Hotel If',
        text: "4.5 star hotel",
        price: 20,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvB2G6VftBSj1aMWISEziN_NoSXwcL0AAhx0jxWy5FqgfaxWDYNW5tQWeKAciSMs0aduc&usqp=CAU'
    },
    {
        id:3,
        header: 'Hotel Or',
        text: '4 star hotel',
        price: 30,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8YJIIfs72AijwqiiYPWTSlKBsKepW-BdSNMMckY-h9j3-H8o712Al7tra3zCb1fm2BY&usqp=CAU'
    },
    {
        id:4,
        header: 'Hotel Ni',
        text: '3.5 star hotel',
        price: 40,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RY6c7YTvvmVVjku2sokaiUJFd-R0wP7k3QzUwkVqG1PMOSvO6fTk32gk4MOe-ffLg30&usqp=CAU'
    },
    {
        id:5,
        header: 'Hotel AAAAAAAA',
        text: "3 star hotel",
        price: 50,
        img: 'https://pesweb.azureedge.net/spimg/hotelphotos/4-star-hotel-buenos-aires-outside.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=70&w=1440&h=680&mode=crop'
    },
    {
        id:6,
        header: 'Hotel X',
        text: "Very creative",
        price: 60,
        img: 'https://pix10.agoda.net/hotelImages/592/59230/59230_1112211039005277796.jpg?ca=0&ce=1&s=1024x768'
    }

]