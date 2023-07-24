import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LoggedList = styled.ul`
  display: flex;
  gap: 8px;

  margin-left: auto;
`;
export const LoggedItem = styled.li``;
export const LoggedLink = styled(NavLink)`
  display: block;
  font-weight: 600;
  font-size: 18px;

  padding: 14px 28px;

  color: blue;
  background-color: yellow;

  border-radius: 14px;

  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #000000;
    background-color: rgba(250, 187, 24, 0.1);
  }
`;