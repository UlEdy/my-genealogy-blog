import styled from 'styled-components';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//interface
import { SingleNavItemProps } from '@interface';

//color
import { themeColors } from '@styles/colors';

//utils
import { device } from '@utils/devices';

export const NavigationWrapper = styled.nav``;

export const NavigationBurger = styled.button`
    /* margin-top: 5px; */
    padding: 5px;
    background: ${themeColors.primary};
    border: 2px solid ${themeColors.primary}; ;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 24px;
    color: ${themeColors.secondary};
`;

export const SingleNavItem = styled.a<SingleNavItemProps>`
    display: ${props => (props.isShow ? 'block' : 'none')};
    padding: 0 5px;
`;
