import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';
import bigSVG from '../assets/bg-hero-squiggle.svg';
import scrollSVG from '../assets/icon-scroll.svg';

const HeaderCard = () => {
  return (
    <Wrapper>
      <SvgWrapper>
        <img src={bigSVG} alt="" />
        <ScrollIcon>
          <img src={scrollSVG} alt="" />
        </ScrollIcon>
      </SvgWrapper>

      <LargeText>Get paid for the work</LargeText>

      <LargeText>
        you <span>love</span> to do.
      </LargeText>

      <LargeTextMobile>
        Get paid for the work you <span>love</span> to do.
      </LargeTextMobile>

      <Spacer />

      <SmallText>
        The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape
        the rat race or set up a side hustle, we’ve got you covered.
      </SmallText>
      <ScrollIconMobile>
        <img src={scrollSVG} alt="" />
      </ScrollIconMobile>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (${QUERIES.tabletAndDown}) {
    width: 550px;
  }

  @media (${QUERIES.mobleAndDown}) {
    width: 100%;
    padding: 0 24px;
    gap: 30px;
  }
`;

const LargeText = styled.h1`
  font-size: 48px;
  line-height: 48px;
  z-index: 20;

  & span {
    color: ${COLORS.turquise};
    line-height: inherit;
  }

  & :nth-of-type(2) {
    margin-bottom: 30px;
  }

  @media (${QUERIES.tabletAndDown}) {
    font-size: ${32 / 16}rem;
  }

  @media (${QUERIES.mobleAndDown}) {
    display: none;
  }
`;

const LargeTextMobile = styled.h1`
  font-size: ${32 / 16}rem;
  display: none;

  & span {
    color: ${COLORS.turquise};
    line-height: inherit;
  }

  @media (${QUERIES.mobleAndDown}) {
    display: revert;
  }
`;

const SmallText = styled.p`
  width: 550px;
  color: ${COLORS.grey};
  z-index: 20;

  @media (${QUERIES.mobleAndDown}) {
    width: revert;
    font-size: ${15 / 16}rem;
  }
`;

const Spacer = styled.div`
  width: 100%;
  height: 30px;

  @media (${QUERIES.mobleAndDown}) {
    display: none;
  }
`;

const SvgWrapper = styled.div`
  position: absolute;
  top: -80px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${QUERIES.tabletAndDown}) {
    width: 300px;
    top: -30px;
  }

  @media (${QUERIES.mobleAndDown}) {
    display: none;
  }
`;

const ScrollIcon = styled.div`
  width: 26px;
  height: 46px;
  transform: translateY(-40%);

  @media (${QUERIES.tabletAndDown}) {
    transform: translateY(90%);
  }

  @media (${QUERIES.mobleAndDown}) {
    display: none;
  }
`;

const ScrollIconMobile = styled.div`
  display: none;

  @media (${QUERIES.mobleAndDown}) {
    display: block;
  }
`;

export default HeaderCard;
