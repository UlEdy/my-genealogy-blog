//components
import styled from 'styled-components';

//interface
import { ImageProps } from '@/interface/interface';

//themes
import themes from '@themes';

export const ImagePost = styled.img<ImageProps>`
    max-width: 40%;
    min-width: 250px;
    margin: 1rem;
    top: 0;
    left: 0;
    float: right;
`;

export const TitlePost = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 3rem;
`;

export const TextPost = styled.p`
    padding: 0 5%;
    text-align: justify;
`;

export const ContentPost = styled.div`
    display: flex;
    justify-self: center;
    align-items: center;
    flex-direction: column;
    @media screen and (${themes.device.mobileL}) {
        display: inline-block;
    }
`;
