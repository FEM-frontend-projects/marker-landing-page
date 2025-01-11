import styled from 'styled-components';

import heroLeft from '../assets/illustration-hero-left.svg';
import heroRight from '../assets/illustration-hero-right.svg';
import { QUERIES } from '../constants';

const HeroMobile = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={heroLeft} alt="" />
      </ImageWrapper>
      <ImageWrapper>
        <img src={heroRight} alt="" />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  grid-template-columns: 1fr 1fr;
  width: 410px;
  height: 233px;
  margin-top: 30px;

  @media (${QUERIES.mobleAndDown}) {
    display: flex;
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  width: 250px;
  height: 233px;

  & img {
    object-fit: cover;
  }
`;

export default HeroMobile;
