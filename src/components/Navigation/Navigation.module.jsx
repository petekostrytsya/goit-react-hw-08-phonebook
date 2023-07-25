import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Logo = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;

  margin-right: 114px;

  color: blue;
  > span {
    color: yellow;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: blue;
    > span {
      color: yellow;
    }
  }
`;

export const MainNav = styled.nav``;
export const MainNavList = styled.ul``;
export const MainNavItem = styled.li``;
export const MainNavLink = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  padding: 22px 28px;

  color: #000000;
  background-color: #ffffff;
  border-radius: 18px;

  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: font-weight 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    font-weight: 600;

    color: #ffffff;
    background-color: #000000;
  }
`;