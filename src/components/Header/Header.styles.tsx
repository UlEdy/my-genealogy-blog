import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    .header-img {
        position: relative;
        height: 100px;
        background-image: url('../assets/img/header.png');
        background-size: cover;
        background-position: 0 10%;

        .header-text {
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
        }

        .header-bg {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #a98c6f62;
        }
    }

    @media screen and (max-width: 480px) {
        .header-text > p {
            display: none;
        }
    }

    @media screen and (min-width: 481px) {
        .header-text h1 {
            margin-bottom: 10px;
        }
    }
`;
