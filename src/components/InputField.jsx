import styled from 'styled-components';
import { COLORS } from '../constants';

const InputField = ({ setInputText, errorMessage }) => {
  const style = {
    border: errorMessage ? `2px solid ${COLORS.pink}` : 'none',
  };

  return (
    <Wrapper>
      <Input
        type="email"
        name=""
        id=""
        placeholder="Email address"
        onChange={(e) => setInputText(e.target.value)}
        style={style}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 320px;
  height: 48px;
  border: none;
  border-radius: 24px;
  background: ${COLORS.mediumBlue};
  font-weight: bold;
  font-size: ${15 / 16}rem;
  padding-left: 20px;
  color: white;

  & :active {
    outline: 2px solid ${COLORS.turquise};
  }

  &:focus {
    outline: 3px solid ${COLORS.turquise};
  }
`;

const ErrorMessage = styled.p`
  white-space: nowrap;
  position: absolute;
  bottom: -26px;
  left: 20px;
  font-size: ${12 / 16}rem;
  color: ${COLORS.pink};
`;

export default InputField;
