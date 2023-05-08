import styled from 'styled-components';

//theme
import theme from '@theme';

export const HeaderWrapper = styled.header``;

export const HeaderImg = styled.div`
    position: relative;
    height: 100px;
    background-image: url('../assets/img/header.png');
    background-size: cover;
    background-position: 0 10%;

    @media screen and (${theme.device.tablet}) {
        height: 150px;
    }

    @media screen and (${theme.device.laptop}) {
        height: 200px;
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
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${theme.color.primaryLight};
`;
