import styled from 'styled-components';
import CheckMark from './CheckMark';

const LisItem = ({ children, color }) => {
  return (
    <Item>
      <CheckMarkWrapper>
        <CheckMark color={color} />
      </CheckMarkWrapper>
      {children}
    </Item>
  );
};

const CheckMarkWrapper = styled.div`
  display: inline-block;
  width: 12px;

  & img {
    position: revert;
    top: revert;
    transform: revert;
    display: block;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
`;

export default LisItem;
