import styled from 'styled-components';

//components
import { Link } from 'react-router-dom';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//intefrace
import { ShowingProps } from '@interface';

//theme
import themes from '@themes';

export const NavigationWrapper = styled.nav`
    position: relative;
    top: 0;
    z-index: 1;

    @media screen and (${themes.device.mobileL}) {
        position: relative;
        display: flex;
        justify-content: center;
        background-color: ${themes.color.primary};
    }
`;

export const NavigationBurger = styled.button<ShowingProps>`
    position: ${props => (props.isShow ? 'absolute' : 'relative')};
    padding: 5px;
    background: ${themes.color.primary};
    border: 0;
    border-bottom-right-radius: 20%;

    @media screen and (${themes.device.mobileL}) {
        display: none;
    }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 24px;
    color: ${themes.color.secondary};
`;

export const SingleNavItem = styled.div<ShowingProps>`
    padding: 0 0.5rem;
    display: ${props => (props.isShow ? 'bloc' : 'none')};
    /* display: ${props => (props.isShow ? 'flex' : 'none')};
    align-content: stretch; */
    background-color: ${themes.color.primaryLight};
    &:hover {
        background-color: ${themes.color.secondary};
    }
    transition: background-color 0.3s;

    @media screen and (${themes.device.mobileL}) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33%;
    }

    @media screen and (${themes.device.tablet}) {
        width: 25%;
    }
`;

export const StyledLink = styled(Link)`
    width: 100%;
    color: inherit;
    text-decoration: none;
`;
