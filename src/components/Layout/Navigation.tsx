import { useState } from 'react';

//components
import NavItem from './NavItem';

//styles
import {
    NavigationWrapper,
    NavigationBurger,
    StyledFontAwesomeIcon,
} from './Layout.styles';

//icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faBars);

const navItemsLabel = [
    { label: 'Blog', path: '/' },
    { label: 'Drzewo genealogiczne', path: 'tree' },
    { label: 'O mnie', path: 'about' },
];

export const Navigation: FC = () => {
    const [showMore, setShowMore] = useState(false);
    const handleBurgerClick = () => {
        setShowMore(prevShow => !prevShow);
    };
    return (
        <NavigationWrapper>
            <NavigationBurger
                onClick={handleBurgerClick}
                isVisible={showMore}
            >
                <StyledFontAwesomeIcon icon={faBars} />
            </NavigationBurger>
            {navItemsLabel.map((item, index) => (
                <NavItem
                    key={`label-${index}`}
                    isVisible={showMore}
                    label={item.label}
                    path={item.path}
                />
            ))}
        </NavigationWrapper>
    );
};
