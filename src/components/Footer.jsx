import styled from 'styled-components';
import { useState } from 'react';
import { COLORS } from '../constants';
import footerSvg from '../assets/bg-footer-squiggle.svg';

import InputField from './InputField';

const Footer = () => {
  const [inputText, setInputText] = useState(null);
  const [errorMessage, setErrorMsg] = useState(null);

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const result = emailPattern.test(inputText);

    if (!result) {
      return setErrorMsg(`Oops! That doesn't look like an email address!`);
    }
    setErrorMsg(null);
  };

  return (
    <FooterWrapper>
      <ImageWrapper>
        <Image src={footerSvg} alt="" />
      </ImageWrapper>
      <InputSection>
        <BigText>Get notified when we launch</BigText>
        <InputWrapper>
          <InputField setInputText={setInputText} errorMessage={errorMessage} />
          <Button onClick={validateEmail}>Get notified</Button>
        </InputWrapper>
      </InputSection>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  height: 228px;
  margin-top: 150px;
  margin-bottom: 120px;
  position: relative;
  width: 1600px;
`;

const ImageWrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  display: block;
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
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 16px;
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
`;

export default Footer;
