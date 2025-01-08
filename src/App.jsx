import styled from 'styled-components';
import { COLORS } from './constants';

import makerLogo from './assets/logo.svg';
import heroLeft from './assets/illustration-hero-left.svg';
import heroRight from './assets/illustration-hero-right.svg';

import Main from './components/Main';
import Footer from './components/Footer';
import HeaderCard from './components/HeaderCard';

function App() {
  return (
    <Wrapper>
      <SuperHeader>
        <MakerLogo>
          <img src={makerLogo} alt="logo text: maker" />
        </MakerLogo>
      </SuperHeader>

      <Header>
        <HeroLeft>
          <img src={heroLeft} alt="" />
        </HeroLeft>
        <HeaderContent>
          <HeaderCard />
        </HeaderContent>
        <HeroRight>
          <img src={heroRight} alt="" />
        </HeroRight>
      </Header>

      <Main />
      <Footer />
      {/* Get paid for the work you love to do. The 9-5 grind is so last century. We believe in living life on your own
      terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered. Indulge your
      passions Your passions shouldn&apos;t be just for the weekend. Earn a living doing what you love. Gain financial
      freedom Start making money work for you. There’s nothing quite like earning while you sleep. Choose your lifestyle
      Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week. Work from anywhere Selling online
      means not being pinned down. Want to work AND travel? Go for it! Our pricing plans We only make money when our
      creators make money. Our plans are always affordable, and it’s completely free to get started. Dip your toe Just
      getting started? No problem at all! Our free plan will take you a long way. Free Unlimited products Basic
      analytics Limited marketplace exposure 10% fee per transaction Dive right in Ready for the big time? Our paid plan
      will help you take your business to the next level. $25.00 /month Custom domain Advanced analytics and reports
      High marketplace visibility 5% fee per transaction Get notified when we launch Email address Get notified */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  background-color: ${COLORS.darkBlue};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  position: relative;
`;

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

const Header = styled.header`
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

export default App;
