// components
import Header from '@components/Header';
import Navigation from '@components/Navigation';
import { Routes, Route } from 'react-router-dom';

// style
import GlobalStyle from '@styles';
import AboutMe from '@components/About';
import Blog from '@components/Blog';
import ErrorPage from '@components/ErrorPage';
import GenealogyTree from '@components/Tree';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header
                header='Genealogia i historie'
                quote='Wielka historia to zbiór małych historii'
            />
            <Navigation />
            <Routes>
                <Route
                    path='/'
                    element={<Blog />}
                />
                <Route
                    path='tree'
                    element={<GenealogyTree />}
                />
                <Route
                    path='about'
                    element={<AboutMe />}
                />
                <Route
                    path='/*'
                    element={<ErrorPage />}
                />
            </Routes>
        </>
    );
};

export default App;
