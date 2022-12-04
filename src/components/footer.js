import {FooterContainer, FooterContent, FooterText, FooterCopyright, LinksContainer}
from '../styles/footer-style'
import {Links} from './reusable'

function Footer(){
    return (
        <FooterContainer>
            <FooterContent>
                <FooterText>
                <h1>Hotels</h1>
                    <div>On a dark desert highway
Cool wind in my hair
Warm smell of colitas
Rising up through the air
Up ahead in the distance
I saw a shimmering light
My head grew heavy and my sight grew dim
I had to stop for the night</div>
                </FooterText>
                
                <LinksContainer>
                    <Links/>
                </LinksContainer>
            </FooterContent>
            <FooterCopyright>California Hotels</FooterCopyright>
        </FooterContainer>

    );

}
export default Footer