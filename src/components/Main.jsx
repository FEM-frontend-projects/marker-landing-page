import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';

import LisItem from './LisItem';

import passionsSvg from '../assets/illustration-passions.svg';
import freedomSvg from '../assets/illustration-financial-freedom.svg';
import lifeStyleSvg from '../assets/illustration-lifestyle.svg';
import workSvg from '../assets/illustration-work-anywhere.svg';
import priceCard1SVG from '../assets/icon-free.svg';
import priceCard2SVG from '../assets/icon-paid.svg';

const Main = () => {
  return (
    <MainWrapper>
      <CardSection>
        <Card>
          <IconWrapper>
            <img src={passionsSvg} alt="" />
          </IconWrapper>

          <TextWrapper>
            <CardTitle>Indulge your passions</CardTitle>
            <SmallText>
              Your passions shouldn&apos;t be just for the weekend. Earn a living doing what you love.
            </SmallText>
          </TextWrapper>
        </Card>

        <Card>
          <IconWrapper>
            <img src={freedomSvg} alt="" />
          </IconWrapper>

          <TextWrapper>
            <CardTitle>Gain financial freedom</CardTitle>
            <SmallText>Start making money work for you. There’s nothing quite like earning while you sleep.</SmallText>
          </TextWrapper>
        </Card>

        <Card>
          <IconWrapper>
            <img src={lifeStyleSvg} alt="" />
          </IconWrapper>

          <TextWrapper>
            <CardTitle>Choose your lifestyle</CardTitle>
            <SmallText>Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.</SmallText>
          </TextWrapper>
        </Card>

        <Card>
          <IconWrapper>
            <img src={workSvg} alt="" />
          </IconWrapper>

          <TextWrapper>
            <CardTitle>Work from anywhere</CardTitle>
            <SmallText>Selling online means not being pinned down. Want to work AND travel? Go for it!</SmallText>
          </TextWrapper>
        </Card>
      </CardSection>

      <PricingTextWrapper>
        <MediumText>Our pricing plans</MediumText>
        <SmallText>
          We only make money when our creators make money. Our plans are always affordable, and it’s completely free to
          get started.
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
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 25px;
  margin-bottom: 200px;

  @media (${QUERIES.tabletAndDown}) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 250px;

  &:nth-of-type(even) {
    margin-top: 55px;
  }

  @media (${QUERIES.tabletAndDown}) {
    width: 515px;
    display: flex;
    gap: 50px;

    &:nth-of-type(even) {
      margin-top: 0;
      transform: translateX(-35px);
    }

    &:nth-of-type(odd) {
      margin-top: 0;
      transform: translateX(35px);
    }
  }
`;

const IconWrapper = styled.div`
  background: ${COLORS.mediumBlue};
  width: 160px;
  height: 164px;
  border-radius: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  @media (${QUERIES.tabletAndDown}) {
    width: 120px;
    height: 124px;
    flex-shrink: 0;
    flex-grow: 0;

    & img {
      width: 60%;
    }
  }
`;

const TextWrapper = styled.div`
  @media (${QUERIES.tabletAndDown}) {
    display: flex;
    flex-direction: column;
    margin-top: 12px;
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
`;

const MediumText = styled.h3`
  font-size: ${32 / 16}rem;
  font-weight: bold;
  margin-bottom: 20px;
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

  @media (${QUERIES.tabletAndDown}) {
    width: 445px;
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

export default Main;
