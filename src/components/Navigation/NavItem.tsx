// components
import { StyledLink } from './Navigation.styles';
//interface
import { NavItemProps } from '@/interface/interface';

//style
import { TextStyle } from '@styles';
import { SingleNavItem } from './Navigation.styles';

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
