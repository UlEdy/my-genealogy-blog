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
    return (
        <NavigationWrapper>
            <NavigationBurger>
                <StyledFontAwesomeIcon icon={faBars} />
            </NavigationBurger>
        </NavigationWrapper>
    );
};
