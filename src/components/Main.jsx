import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';

import LisItem from './LisItem';
import CardSection from './CardSection';

import priceCard1SVG from '../assets/icon-free.svg';
import priceCard2SVG from '../assets/icon-paid.svg';

const Main = () => {
  return (
    <MainWrapper>
      <CardSection />

      <PriceSection>
        <PricingTextWrapper>
          <MediumText>Our pricing plans</MediumText>
          <SmallText>
            We only make money when our creators make money. Our plans are always affordable, and it’s completely free
            to get started.
          </SmallText>
        </PricingTextWrapper>
        <PriceCardSection>
          <PriceCardSmaller>
            <EmptyElement />
            <CardTitle>Dip your toe</CardTitle>
            <SmallText style={{ color: 'white', opacity: 0.6 }}>
              Just getting started? No problem at all! Our free plan will take you a long way.
            </SmallText>
            <BigText>Free</BigText>
            <ul>
              <LisItem color={`${COLORS.turquise}`}>Unlimited products</LisItem>
              <LisItem color={`${COLORS.turquise}`}>Basic analytics</LisItem>
              <LisItem color={`${COLORS.turquise}`}>Limited marketplace exposure</LisItem>
              <LisItem color={`${COLORS.turquise}`}>10% fee per transaction</LisItem>
            </ul>
            <EmptyElement />
            <PriceCardLogo src={priceCard1SVG} alt="" style={{ top: '12px' }} />
          </PriceCardSmaller>
          <PriceCardBigger>
            <CardTitle>Dive right in</CardTitle>
            <SmallText style={{ color: 'black', opacity: 0.6, textShadow: '0px 4px 8px hsl(0deg 0% 0% / 0.7)' }}>
              Ready for the big time? Our paid plan will help you take your business to the next level.
            </SmallText>
            <BigText>
              $25.00 <span>/ month</span>
            </BigText>
            <ul>
              <LisItem color={`${COLORS.mediumBlue}`}>Custom domain</LisItem>
              <LisItem color={`${COLORS.mediumBlue}`}>Advanced analytics and reports</LisItem>
              <LisItem color={`${COLORS.mediumBlue}`}>High marketplace visibility</LisItem>
              <LisItem color={`${COLORS.mediumBlue}`}>5% fee per transaction</LisItem>
            </ul>
            <PriceCardLogo src={priceCard2SVG} alt="" style={{ top: 0 }} />
          </PriceCardBigger>
        </PriceCardSection>
      </PriceSection>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 40px;

  @media (${QUERIES.mobleAndDown}) {
  }
`;

const CardTitle = styled.h4`
  font-size: ${18 / 16}rem;
`;

const SmallText = styled.p`
  color: ${COLORS.grey};
  font-size: ${15 / 16}rem;
`;

const PricingTextWrapper = styled.div`
  width: 540px;
  text-align: center;

  @media (${QUERIES.mobleAndDown}) {
    width: revert;
    padding: 0 40px;
  }
`;

const MediumText = styled.h3`
  font-size: ${32 / 16}rem;
  font-weight: bold;
  margin-bottom: 20px;

  @media (${QUERIES.mobleAndDown}) {
    font-size: ${24 / 16}rem;
  }
`;

const PriceCardSection = styled.section`
  width: 920px;
  height: 450px;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;

  @media (${QUERIES.tabletAndDown}) {
    flex-direction: column;
    height: revert;
    gap: 50px;
  }

  @media (${QUERIES.mobleAndDown}) {
    width: 100%;
    padding: 0 40px;
  }
`;

const PriceCard = styled.div`
  padding: 60px 38px;
  flex: 1;
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  border-radius: 30px;

  @media (${QUERIES.tabletAndDown}) {
    width: 445px;
  }

  @media (${QUERIES.mobleAndDown}) {
    width: revert;
  }
`;

const PriceCardSmaller = styled(PriceCard)`
  background-color: ${COLORS.mediumBlue};
`;

const PriceCardBigger = styled(PriceCard)`
  background-color: ${COLORS.turquise};
  color: black;
`;

const BigText = styled.h2`
  font-size: ${40 / 16}rem;
  display: flex;
  align-items: center;
  gap: 4px;

  & span {
    color: black;
    opacity: 0.6;
    font-size: ${15 / 16}rem;
    font-weight: 400;
  }
`;

const EmptyElement = styled.div`
  height: 12px;
  width: 100%;
  background: ${COLORS.darkBlue};
  position: absolute;
  left: 0;
  border-radius: 24px;

  &:first-of-type {
    top: 0;
  }

  &:last-of-type {
    bottom: 0;
  }
`;

const PriceCardLogo = styled.img`
  position: absolute;
  transform: translateY(-50%);
`;

const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Main;
