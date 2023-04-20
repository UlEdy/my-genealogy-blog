import styled from 'styled-components';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//color
import { themeColors } from '@styles/colors';

//utils
import { device } from '@utils/devices';

export const NavigationWrapper = styled.nav``;

export const NavigationBurger = styled.button`
    margin-top: 5px;
    padding: 5px;
    background: ${themeColors.lightMain};
    border: 2px solid ${themeColors.lightMain}; ;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 24px;
    color: ${themeColors.shadow};
`;
