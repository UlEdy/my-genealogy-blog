//components
import { Routes, Route } from 'react-router-dom';
import AboutMe from '@components/About';
import Blog from '@components/Blog';
import ErrorPage from '@components/ErrorPage';
import GenealogyTree from '@components/Tree';

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
