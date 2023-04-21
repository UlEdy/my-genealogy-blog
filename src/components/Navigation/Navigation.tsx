import { useState } from 'react';

//components
import NavItem from './NavItem';

//styles
import {
    NavigationWrapper,
    NavigationBurger,
    StyledFontAwesomeIcon,
} from './Navigation.styles';

//icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faBars);

export const Navigation: React.FC = () => {
    const [showMore, setShowMore] = useState(false);
    const handleBurgerClick = () => {
        setShowMore(prevShow => !prevShow);
    };
    return (
        <NavigationWrapper>
            <NavigationBurger onClick={handleBurgerClick}>
                <StyledFontAwesomeIcon icon={faBars} />
            </NavigationBurger>
            <NavItem
                isShow={showMore}
                label='Blog'
            />
            <NavItem
                isShow={showMore}
                label='Drzewo genealogiczne'
            />
            <NavItem
                isShow={showMore}
                label='O mnie'
            />
        </NavigationWrapper>
    );
};
