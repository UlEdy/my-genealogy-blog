//components
import { LayoutContainer } from './Layout.styles';
import { Header } from './Header';
import { Navigation } from './Navigation';

export const Layout: React.FC = () => {
    return (
        <LayoutContainer>
            <Header
                header='Genealogia i historie'
                quote='Wielka historia to zbiór małych historii'
            />
            <Navigation />
        </LayoutContainer>
    );
};
