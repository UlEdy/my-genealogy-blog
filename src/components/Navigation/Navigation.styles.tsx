import styled from 'styled-components';

//components
import { NavLink } from 'react-router-dom';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//interface
import { SingleNavItemProps } from '@interface';

//theme
import theme from '@theme';

export const NavigationWrapper = styled.nav`
    position: relative;
    top: 0;
    z-index: 1;

    @media screen and (${theme.device.mobileL}) {
        position: relative;
        display: flex;
        justify-content: center;
        background-color: ${theme.color.primary};
    }
`;

export const NavigationBurger = styled.button`
    padding: 5px;
    background: ${theme.color.primary};
    border: 0;
    border-bottom-right-radius: 20%;

    @media screen and (${theme.device.mobileL}) {
        display: none;
    }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 24px;
    color: ${theme.color.secondary};
`;

export const SingleNavItem = styled.div<SingleNavItemProps>`
    padding: 0 5px;
    display: ${props => (props.isShow ? 'bloc' : 'none')};
    background-color: ${theme.color.primaryLight};
    &:hover {
        background-color: ${theme.color.secondary};
    }
    transition: background-color 0.3s;

    @media screen and (${theme.device.mobileL}) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33%;
    }

    @media screen and (${theme.device.tablet}) {
        width: 25%;
    }
`;

export const StyledLink = styled(NavLink)`
    color: inherit;
    text-decoration: none;
`;
