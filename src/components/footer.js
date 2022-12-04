import {FooterContainer, FooterContent, FooterText, FooterCopyright, LinksContainer}
from '../styles/footer-style'
import {Logo, Links} from './reusable'

function Footer(){
    return (
        <FooterContainer>
            <FooterContent>
                <FooterText>
                    <h1>hotelbara Shop</h1>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget rutrum eros. Donec imperdiet est nisi, in auctor lorem tempor dapibus. Morbi sit amet odio ac orci consequat mollis mollis sit amet ante. Nulla orci libero, accumsan eget venenatis egestas, cursus id dolor. Nulla euismod lobortis molestie. Aliquam efficitur purus velit, at porttitor orci euismod nec. Sed consectetur consequat orci, in interdum nulla luctus nec. Proin feugiat dui nec ipsum vestibulum interdum. Cras ac ex nibh. Sed quam mi, congue vel rutrum vel, consectetur in dui. Duis non bibendum mauris. Suspendisse sed varius velit, a condimentum ex. Fusce quis lacus efficitur, euismod sem ac, laoreet enim.</div>
                </FooterText>
                <Logo height='60px' width='160px'/>
                <LinksContainer>
                    <Links/>
                </LinksContainer>
            </FooterContent>
            <FooterCopyright>2022 IoT &copy; pls steal, you are welcome</FooterCopyright>
        </FooterContainer>

    );

}
export default Footer