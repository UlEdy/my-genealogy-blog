//components
import { Routes, Route } from 'react-router-dom';
import AboutMe from '@pages/About';
import Blog from '@components/Blog';
import ErrorPage from '@components/ErrorPage';
import GenealogyTree from '@pages/Tree';
import { FC } from 'react';

export const Content: FC = () => {
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
