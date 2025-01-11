import styled from 'styled-components';
import heroLeft from '../assets/illustration-hero-left.svg';
import heroRight from '../assets/illustration-hero-right.svg';
import makerLogo from '../assets/logo.svg';

import HeaderCard from './HeaderCard';
import { QUERIES } from '../constants';
import HeroMobile from './HeroMobile';

const Header = () => {
  return (
    <>
      <SuperHeader>
        <MakerLogo>
          <img src={makerLogo} alt="logo text: maker" />
        </MakerLogo>
      </SuperHeader>
      <HeroMobile />
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

  @media (${QUERIES.mobleAndDown}) {
    justify-content: center;
    padding-left: 0;
  }
`;

const MakerLogo = styled.div`
  width: 120px;
`;

const MainHeader = styled.header`
  width: 120%;
  min-width: 1800px;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  @media (${QUERIES.tabletAndDown}) {
    justify-content: center;
  }

  @media (${QUERIES.mobleAndDown}) {
    min-width: revert;
    padding: 0 40px;
  }
`;

const Hero = styled.div`
  height: 550px;
  width: 600px;
  position: relative;

  & img {
    display: block;
    height: 100%;
    position: absolute;
    aspect-ratio: 1;
  }

  @media (${QUERIES.tabletAndDown}) {
    height: 350px;
  }

  @media (${QUERIES.mobleAndDown}) {
    display: none;
  }
`;

const HeroLeft = styled(Hero)`
  & img {
    right: 0;
  }
`;

const HeroRight = styled(Hero)``;

const HeaderContent = styled.div`
  padding-top: 40px;
  position: relative;
  z-index: 10;
`;

export default Header;
