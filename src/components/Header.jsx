import styled from 'styled-components';
import heroLeft from '../assets/illustration-hero-left.svg';
import heroRight from '../assets/illustration-hero-right.svg';
import makerLogo from '../assets/logo.svg';

import HeaderCard from './HeaderCard';

const Header = () => {
  return (
    <Wrapper>
      <LogoArea>
        <MakerLogo>
          <img src={makerLogo} alt="logo text: maker" />
        </MakerLogo>
      </LogoArea>

      <ContentWrapper>
        <HeroLeftWrapper>
          <img src={heroLeft} alt="" />
        </HeroLeftWrapper>

        <HeaderCard />

        <HeroRightWrapper>
          <img src={heroRight} alt="" />
        </HeroRightWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: relative;
`;

const LogoArea = styled.div`
  height: 120px;
  padding: 50px 120px;
`;

const MakerLogo = styled.div`
  width: 120px;
  height: 35px;
`;

const ContentWrapper = styled.div`
  display: flex;
  padding-top: 80px;
  border: 2px solid red;
  height: 455px;
`;

const HeroLeftWrapper = styled.div`
  height: 459px;

  & img {
    display: block;
    aspect-ratio: 1;
  }
`;

const HeroRightWrapper = styled.div`
  height: 459px;

  & img {
    display: block;
    /* transform: translateX(85px); */
  }
`;

export default Header;
