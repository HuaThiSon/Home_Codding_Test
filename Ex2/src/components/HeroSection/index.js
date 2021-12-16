import React, {useState} from 'react';
import banner1 from '../../images/banner1.jfif'

import {
    HeroContainer,
    HeroBg,
    ImgBg,
    HeroContent,
    ButtonGroup,
    Tab,
} from './HeroElements'


const types = ['Drive or deliver', 'Eat', 'Ride'];

const HeroSection = () => {
    
    const [active, setActive] = useState(types[0]);

    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg src={banner1} alt="this is covid1 image"></ImgBg>
            </HeroBg>
            <HeroContent>
                <ButtonGroup>
                    {types.map(type => (
                    <Tab
                        key={type}
                        active={active === type}
                        onClick={() => setActive(type)}
                    >
                        {type}
                    </Tab>
                    ))}
                </ButtonGroup>
                    <p />
                    <p> Your payment selection: {active} </p>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection