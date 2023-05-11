import { ThemeConsumer } from 'styled-components';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

const themes = {
    color: {
        primary: 'rgb(150, 125, 100)',
        primaryLight: 'rgba(150, 125, 100, 0.45)',
        secondary: 'rgb(57, 62, 70)',
        secondaryLight: 'rgb(57, 62, 70, 0.25)',
        shadow: 'rgb(34, 40, 49)',
        font: 'rgb(184, 183, 173)',
    },

    device: {
        mobileS: `(min-width: ${size.mobileS})`,
        mobileM: `(min-width: ${size.mobileM})`,
        mobileL: `(min-width: ${size.mobileL})`,
        tablet: `(min-width: ${size.tablet})`,
        laptop: `(min-width: ${size.laptop})`,
        laptopL: `(min-width: ${size.laptopL})`,
        desktop: `(min-width: ${size.desktop})`,
        desktopL: `(min-width: ${size.desktop})`,
    },
};

export default themes;
