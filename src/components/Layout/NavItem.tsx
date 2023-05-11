// components
import { StyledLink } from './Layout.styles';
//interface
import { NavItemProps } from '@/interface/interface';

//style
import { TextStyle } from '@styles';
import { SingleNavItem } from './Layout.styles';

const NavItem: React.FC<NavItemProps> = ({ label, isShow, path }) => {
    return (
        <SingleNavItem isShow={isShow}>
            <StyledLink to={path}>
                <TextStyle>{label}</TextStyle>
            </StyledLink>
        </SingleNavItem>
    );
};

export default NavItem;
