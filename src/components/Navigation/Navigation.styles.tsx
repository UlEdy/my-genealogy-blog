import styled from 'styled-components';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//interface
import { SingleNavItemProps } from '@interface';

//theme
import themes from '@themes';

export const NavigationWrapper = styled.nav``;

export const NavigationBurger = styled.button`
    /* margin-top: 5px; */
    padding: 5px;
    background: ${themes.color.primaryLight};
    border: 1px solid ${themes.color.primaryLight};
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 24px;
    color: ${themes.color.secondary};
`;

export const SingleNavItem = styled.a<SingleNavItemProps>`
    display: ${props => (props.isShow ? 'block' : 'none')};
    padding: 0 5px;
`;
