import styled, { css } from 'styled-components';

//components
import { NavLink } from 'react-router-dom';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//interface
import { ShowingProps } from '@interface';

//theme
import theme from '@theme';

export const LayoutContainer = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 10;
`;

export const HeaderWrapper = styled.header``;

export const HeaderImg = styled.div`
    position: relative;
    height: 100px;
    background-image: url('../assets/img/header.png');
    background-size: cover;
    background-position: 0 10%;

    @media screen and (${theme.device.tablet}) {
        height: 110px;
    }

    @media screen and (${theme.device.laptop}) {
        height: 120px;
    }
`;

export const HeaderText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 1;

    h1 {
        font-size: 1.6em;
        text-transform: uppercase;
        letter-spacing: 2px;

        @media screen and (${theme.device.mobileL}) {
            margin-bottom: 2px;
            white-space: nowrap;
        }

        @media screen and (${theme.device.laptop}) {
            font-size: 2em;
        }
    }

    p {
        display: none;

        @media screen and (${theme.device.mobileL}) {
            display: inline-block;
            margin-top: 2px;
        }
    }
`;

export const HeaderBackground = styled.div`
    height: 100%;
    background-color: ${theme.color.primaryLight};
`;

export const NavigationWrapper = styled.nav`
    @media screen and (${theme.device.mobileL}) {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${theme.color.primary};
        height: 3rem;
    }
`;

export const NavigationBurger = styled.button<ShowingProps>`
    position: absolute;
    padding: 5px;
    transform: translate(0, -100%);
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

export const StyledLink = styled(({ isShow, ...rest }) => (
    <NavLink {...rest} />
))(
    ({ isShow }) => css<ShowingProps>`
        width: 100%;
        height: 100%;
        padding: 0 0.5rem;
        display: ${() => (isShow ? 'flex' : 'none')};
        align-items: center;
        color: inherit;
        text-decoration: none;
        background-color: ${theme.color.primary};
        &:hover {
            background-color: ${theme.color.secondary};
        }

        transition: background-color 0.3s;

        @media screen and (${theme.device.mobileL}) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            width: 33%;
        }
        @media screen and (${theme.device.tablet}) {
            flex-grow: 0;
            width: 25%;
        }
    `
);
