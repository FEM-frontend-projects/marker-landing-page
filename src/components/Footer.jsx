import styled from 'styled-components';
import { useState } from 'react';
import { COLORS, QUERIES } from '../constants';
import footerSvg from '../assets/bg-footer-squiggle.svg';

import InputField from './InputField';

const Footer = () => {
  const [inputText, setInputText] = useState(null);
  const [errorMessage, setErrorMsg] = useState(null);

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const result = emailPattern.test(inputText);

    if (!result) {
      setErrorMsg(`Oops! That doesn't look like an email address!`);
      setTimeout(() => {
        setErrorMsg(null);
      }, 3000);
      return;
    }
    setErrorMsg(null);
  };

  return (
    <FooterWrapper>
      <ImageWrapper>
        <Image src={footerSvg} alt="" />
        <BigTextMobile>Get notified when we launch</BigTextMobile>
      </ImageWrapper>
      <InputSection>
        <BigText>Get notified when we launch</BigText>
        <InputWrapper>
          <InputField setInputText={setInputText} errorMessage={errorMessage} />
          <Button onClick={validateEmail}>Get notified</Button>
        </InputWrapper>
      </InputSection>

      <MobileInputWrapper>
        <InputField setInputText={setInputText} errorMessage={errorMessage} />
        <Button onClick={validateEmail}>Get notified</Button>
      </MobileInputWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  height: 228px;
  margin-top: 150px;
  margin-bottom: 120px;
  position: relative;
  width: 1600px;

  @media (${QUERIES.tabletAndDown}) {
    width: 1000px;
  }

  @media (${QUERIES.mobleAndDown}) {
    width: 100%;
    height: revert;
    margin-top: 80px;
  }
`;

const ImageWrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  display: block;

  @media (${QUERIES.tabletAndDown}) {
    margin-top: 50px;
  }
`;

const InputSection = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const BigText = styled.h1`
  font-size: ${32 / 16}rem;
  text-align: center;

  @media (${QUERIES.tabletAndDown}) {
    font-size: ${24 / 16}rem;
  }

  @media (${QUERIES.mobleAndDown}) {
    display: none;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media (${QUERIES.mobleAndDown}) {
    display: none;
  }
`;

const Button = styled.button`
  width: 140px;
  height: 48px;
  border-radius: 24px;
  background: ${COLORS.turquise};
  font-size: ${15 / 16}rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${COLORS.darkBlue};
    border: 2px solid ${COLORS.turquise};
    color: white;
  }

  @media (${QUERIES.mobleAndDown}) {
    width: 320px;
  }
`;

const BigTextMobile = styled.h1`
  font-size: ${24 / 16}rem;
  position: absolute;
  top: 55px;
  width: 100%;
  display: none;
  text-align: center;
  padding: 0 54px;

  @media (${QUERIES.mobleAndDown}) {
    display: block;
  }
`;

const MobileInputWrapper = styled.div`
  display: none;

  @media (${QUERIES.mobleAndDown}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 50px;
  }
`;

export default Footer;
