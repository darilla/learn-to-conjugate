import styled from 'styled-components';

import COLORS from '../../../constants/colors';

import { Button } from '../../styles/Button.styles';

export const Container = styled(Button)`
  height: auto;
  position: relative;
  width: auto;
`;

export const DropDown = styled.div`
  background: ${COLORS.white.dark};
  border-radius: 3px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  padding: 10px;
  position: absolute;
  right: -15px;
  top: 25px;
  transition: all 0.3s ease-in-out 0s;
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  width: 200px;
`;
