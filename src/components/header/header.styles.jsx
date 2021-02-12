import styled from 'styled-components'; /* css module allows css snippets to be written and then brought into other styled components */
import FormInput from '../form-input/form-input';
import { Link } from 'react-router-dom';

// **REMOVED** first constant is a common CSS block that can be shared in multiple components using the imported css module from styled-components

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const LogoContainer = styled(Link)` /* actual Link component from react-router-dom */
  height: 100%;
  width: 70px;
  padding-left: 25px;
  display: flex;
  align-items: center;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  /* $OptionContainerStyles shared CSS style function defined above */
  padding: 10px 20px;
  cursor: pointer;
`;

