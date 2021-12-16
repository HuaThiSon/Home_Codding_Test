import React, {useState} from 'react'
import Section2 from '../../images/section2.png'
import {
    BusinessContainer,
    BSNImg,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    Tab


} from './BusinessElements'

const BusinessSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <>
            <BusinessContainer>
                <HeroBg>
                    <BSNImg src={Section2} alt= "this is section2"></BSNImg>
                </HeroBg>
                <HeroContent>
                    <HeroH1>Uber for Business</HeroH1>
                    <HeroP>
                        Tranform the way your company moves and feeds its people
                    </HeroP>
                    <HeroBtnWrapper>
                        <Tab to="signup" 
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        >
                            See how
                        </Tab>
                    </HeroBtnWrapper>
                </HeroContent>
            </BusinessContainer>
        </>
    )
}

export default BusinessSection
