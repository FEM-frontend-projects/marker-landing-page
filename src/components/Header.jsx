import styled from 'styled-components';
import heroLeft from '../assets/illustration-hero-left.svg';
import heroRight from '../assets/illustration-hero-right.svg';
import makerLogo from '../assets/logo.svg';

import HeaderCard from './HeaderCard';

const Header = () => {
  return (
    <>
      <SuperHeader>
        <MakerLogo>
          <img src={makerLogo} alt="logo text: maker" />
        </MakerLogo>
      </SuperHeader>

      <MainHeader>
        <HeroLeft>
          <img src={heroLeft} alt="" />
        </HeroLeft>
        <HeaderContent>
          <HeaderCard />
        </HeaderContent>
        <HeroRight>
          <img src={heroRight} alt="" />
        </HeroRight>
      </MainHeader>
    </>
  );
};

const SuperHeader = styled.div`
  height: 120px;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 90px;
  padding-left: 165px;
  display: flex;
  justify-content: flex-start;
`;

const MakerLogo = styled.div`
  width: 120px;
`;

const MainHeader = styled.header`
  width: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

const Hero = styled.div`
  position: relative;
  min-height: 450px;
  width: 350px;

  & img {
    display: block;
    height: 100%;
    aspect-ratio: 1;
    position: absolute;
    object-fit: none;
    object-position: 0%;
  }
`;

const HeroLeft = styled(Hero)`
  /* left: -60px; */
  /* transform: translateX(-50px); */

  & img {
    object-position: 100%;
  }
`;

const HeroRight = styled(Hero)``;

const HeaderContent = styled.div`
  padding-top: 40px;
  position: relative;
  z-index: 10;
`;

export default Header;
