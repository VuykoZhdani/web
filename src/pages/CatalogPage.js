import { useEffect, useState } from 'react'
import {ItemsContainer, ItemContainer, PriceContainer, ViewMore} from '../styles/catalog-item-style'
import {Image} from '../components/reusable'
import FilterBar from '../components/filter-bar'
import { Link } from "react-router-dom";


export default function CatalogPage(props){

    const [border, setBorder] = useState(3);
    const [items, setItems] = useState(props.itemsList.slice(0, border));
    const [starsFilter, setstarsFilter] = useState('None');
    const [countryFilter, setCountryFilter] = useState('None');
    const [searchText, setSearchText] = useState('')

    function showMore(){
        setBorder(border + 3);
    }
    useEffect(() => {
        const pattern = new RegExp(searchText, 'i');

        let filteredItems = props.itemsList.filter(item => (searchText === '' ||
            pattern.test(item.header) || pattern.test(item.text) ||
            pattern.test(item.price)));

        filteredItems = filteredItems.filter(item => (item.stars === starsFilter ||
            starsFilter === 'None'));

        setItems(filteredItems.filter(item => (item.country === countryFilter ||
            countryFilter === 'None')).slice(0, border));
    }, [border, starsFilter, countryFilter, searchText, props.itemsList]);
    return(
        <div>
            <ItemsContainer>
            <FilterBar stars={[starsFilter, setstarsFilter]}
                    country={[countryFilter, setCountryFilter]}
                    search={[searchText, setSearchText]} />
                {items.map((item) => 
                    <ItemContainer key= {`Item${item.id}`}>
                        <Image img={item.img} width='200px' height='200px'/>
                        <h1>{item.header.length <45 ? item.header : item.header.substr(0,45)+'...'}</h1>
                        <div>{item.text.length <245 ? item.text : item.text.substr(0,245)+'...'}</div>
                        <PriceContainer>
                            <h1>Price:</h1>
                            <h1>{item.price} UAH</h1>
                        </PriceContainer>
                        <Link to={"/item/" + item.id}>
                            <button>View More</button>
                        </Link>
            </ItemContainer>
            )}

            </ItemsContainer>
            <ViewMore onClick={showMore}>View More</ViewMore>
        </div>
    );
}

