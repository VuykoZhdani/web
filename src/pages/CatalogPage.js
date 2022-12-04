import { useEffect, useState } from 'react'
import {ItemsContainer, ItemContainer, PriceContainer, ViewMore} from '../styles/catalog-item-style'
import {Image} from '../components/reusable'
import FilterBar from '../components/filter-bar'
import { reduceText, Spinner } from '../components/reusable'
import { Link } from "react-router-dom";
import { getFilteredhotels } from '../connection.js'

export default function CatalogPage(){

    const [border, setBorder] = useState(3);
    const [items, setItems] = useState(null);
    const [showedItems, setShowedItems] = useState(null);
    const [starsFilter, setstarsFilter] = useState('None');
    const [countryFilter, setCountryFilter] = useState('None');
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        (async function () {
            setItems(await getFilteredhotels(starsFilter, countryFilter));
        })()
    }, [starsFilter, countryFilter]);
       
    function showMore(){
        setBorder(border + 3);
    }
    useEffect(() => {
        if (!items) { return }
        const pattern = new RegExp(searchText, 'i');
        let filteredItems = items;

        if (searchText !== '') {
            filteredItems = items.filter(item => (pattern.test(item.text) || pattern.test(item.price)));
        }

        setShowedItems(filteredItems.slice(0, border));
    }, [border, searchText, items]);

    if (!showedItems) { return <Spinner /> }
    return(
        <div>
            <ItemsContainer>
            <FilterBar stars={[starsFilter, setstarsFilter]}
                    country={[countryFilter, setCountryFilter]}
                    search={[searchText, setSearchText]} />
                {showedItems.map((item) => 
                    <ItemContainer key= {`Item${item.id}`}>
                        <Image img={item.img} width='200px' height='200px'/>
                        <h1>{reduceText(item.header, 45)}</h1>
                        <div>{reduceText(item.text, 245)}</div>
                        <PriceContainer>
                            <h1>Price:</h1>
                            <h1>{item.price} UAH</h1>
                        </PriceContainer>
                        <Link to={"/hotels/" + item.id}>
                            <button onClick={() => (window.scrollTo({ top: 0 }))}>View More</button>
                        </Link>
            </ItemContainer>
            )}

            </ItemsContainer>
            <ViewMore onClick={showMore}>View More</ViewMore>
        </div>
    );
}

