import { Image, Spinner } from '../components/reusable.js'
import {
    UpperContainer, ItemInfo, BottomContainer,
    ButtonsContainer, Button
} from '../styles/item-page-style.js'
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { gethotelById } from '../connection.js'

export default function ItemPage() {

    const { id } = useParams();

    async function loadItem(id) {
        setItem(await gethotelById(id));
    }

    const [item, setItem] = useState();

    useEffect(() =>{ 
        loadItem(id)}
    , []);

    if (!item) { return <Spinner /> }
    return (
        <>
            <UpperContainer>
                <Image img={item.img} height='360px' width='360px' />
                <ItemInfo>
                    <h1>{item.header}</h1>
                    <div>{item.text}</div>
                </ItemInfo>
            </UpperContainer>
            <BottomContainer>
                <h1>Price: {item.price}$</h1>
                <ButtonsContainer>
                    <Link to="/catalog">
                        <Button>Go Back</Button>
                    </Link>
                    <Button>Add to Cart</Button>
                </ButtonsContainer>
            </BottomContainer>
        </>
    );
}