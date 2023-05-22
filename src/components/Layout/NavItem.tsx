// components
import { StyledLink } from './Layout.styles';
//interface
import { NavItemProps } from '@/interface/interface';

//style
import { TextStyle } from '@styles';

const NavItem: React.FC<NavItemProps> = ({ label, isShow, path }) => {
    return (
        <StyledLink
            to={path}
            isShow={isShow}
        >
            <TextStyle>{label}</TextStyle>
        </StyledLink>
    );
};

export default NavItem;
