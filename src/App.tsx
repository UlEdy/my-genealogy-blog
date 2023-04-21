// components
import Header from '@components/Header';
import Navigation from '@components/Navigation';

// style
import { GlobalStyle } from '@styles/globalStyle';

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Header
                header='Genealogia i historie'
                quote='Wielka historia to zbiór małych historii'
            />
            <Navigation />
        </div>
    );
};

export default App;
