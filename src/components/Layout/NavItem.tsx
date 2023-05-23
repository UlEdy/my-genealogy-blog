// components
import { StyledLink } from './Layout.styles';

//interface
import { NavItemProps } from '@/interface/interface';

//style
import { TextStyle } from '@styles';

const NavItem: React.FC<NavItemProps> = ({ label, isVisible, path }) => {
    return (
        <StyledLink
            to={path}
            isVisible={isVisible}
        >
            <TextStyle>{label}</TextStyle>
        </StyledLink>
    );
};

export default NavItem;
