import styled from 'styled-components';

import { QUERIES, COLORS } from '../constants';
import passionsSvg from '../assets/illustration-passions.svg';
import freedomSvg from '../assets/illustration-financial-freedom.svg';
import lifeStyleSvg from '../assets/illustration-lifestyle.svg';
import workSvg from '../assets/illustration-work-anywhere.svg';

const CardSection = () => {
  return (
    <CardSectionWrapper>
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
    </CardSectionWrapper>
  );
};

const CardSectionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 25px;
  margin-bottom: 200px;

  @media (${QUERIES.tabletAndDown}) {
    flex-direction: column;
    align-items: center;
  }

  @media (${QUERIES.mobleAndDown}) {
    width: 100vw;
    gap: 50px;
    padding: 0 40px;
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

  @media (${QUERIES.mobleAndDown}) {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    &:nth-of-type(even) {
      margin-top: 0;
      transform: translateX(0);
    }

    &:nth-of-type(odd) {
      margin-top: 0;
      transform: translateX(0);
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

    @media (${QUERIES.mobleAndDown}) {
      margin: 0;
    }
  }
`;

const TextWrapper = styled.div`
  @media (${QUERIES.tabletAndDown}) {
    display: flex;
    flex-direction: column;
    margin-top: 12px;
  }

  @media (${QUERIES.mobleAndDown}) {
    text-align: center;
  }
`;

const CardTitle = styled.h4`
  font-size: ${18 / 16}rem;
  margin-bottom: 10px;
`;

const SmallText = styled.p`
  color: ${COLORS.grey};
  font-size: ${15 / 16}rem;
`;

export default CardSection;
