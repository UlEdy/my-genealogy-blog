//components
import { Routes, Route } from 'react-router-dom';
import AboutMe from '@pages/About';
import Blog from '@components/Blog';
import ErrorPage from '@components/ErrorPage';
import GenealogyTree from '@pages/Tree';

export const Content: React.FC = () => {
    return (
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
    );
};
