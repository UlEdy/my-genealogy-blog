//components
import Header from '@components/Header';
import Navigation from '@components/Navigation';

export const Layout: React.FC = () => {
    return (
        <>
            <Header
                header='Genealogia i historie'
                quote='Wielka historia to zbiór małych historii'
            />
            <Navigation />
        </>
    );
};
