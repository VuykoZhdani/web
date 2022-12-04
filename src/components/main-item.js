import {MainItemStyle, MainItemInfo, ImageContainer, PriceContainer}
    from '../styles/main-item-style'
import {Image} from '../components/reusable'
import { useDispatch } from 'react-redux';
import { add } from '../store/actions/actions.js'
function MainItem({item}){

    const dispatch = useDispatch();

    return(
        <MainItemStyle>
            <ImageContainer>
                <Image img={item.img} width='250px' height='250px'/>
            </ImageContainer>
            <MainItemInfo>
                <h1>{item.header}</h1>
                <div>{item.text}</div>
                <PriceContainer>
                    <div>Price: {item.price} UAH</div>
                    <button onClick={() => dispatch(add(item))}>Add to Cart</button>
                </PriceContainer>
            </MainItemInfo>
        </MainItemStyle>
    );

}

export default MainItem