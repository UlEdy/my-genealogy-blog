import styled from 'styled-components';
import { device } from '@utils/devices';

export const HeaderWrapper = styled.header``;

export const HeaderImg = styled.div`
    position: relative;
    height: 100px;
    background-image: url('../assets/img/header.png');
    background-size: cover;
    background-position: 0 10%;
`;

export const HeaderText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    text-shadow: 2px 2px 5px #000000b0;
    z-index: 1;

    h1 {
        font-size: 1.6em;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    @media ${device.laptop} {
        p {
            display: none;
        }
    }
`;

export const HeaderBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #a98c6f62;
`;
