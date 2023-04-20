// components
import Header from '@components/Header';
import Navigation from '@components/Navigation';

//lib
import { ThemeProvider } from 'styled-components';

// style
import { GlobalStyle } from '@styles/globalStyle';

const App = () => {
    return (
        <ThemeProvider theme={{ fontFamily: 'Raleway' }}>
            <GlobalStyle />
            <Header
                header='Genealogia i historie'
                quote='Wielka historia to zbiór małych historii'
            />
            <Navigation />
        </ThemeProvider>
    );
};

export default App;
