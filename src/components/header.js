
import {HeaderNavButtonStyle, HeaderWrapper, HeaderNav}
    from '../styles/header-style.js'
import {Link} from "react-router-dom";


function HeaderNavButton(props){
    return(
        <HeaderNavButtonStyle>
            {props.name}
        </HeaderNavButtonStyle>
    );
}

function Header() {
    return(
        <HeaderWrapper>
            
            <HeaderNav>
                <Link to="/">
                    <HeaderNavButton name="Home"/>
                </Link>
                <Link to="/catalog">
                    <HeaderNavButton name="Catalog"/>
                </Link>
                <Link to="/cart">
                    <HeaderNavButton name="Cart"/>
                </Link>
            </HeaderNav>

        </HeaderWrapper>

    )

}

export default Header;