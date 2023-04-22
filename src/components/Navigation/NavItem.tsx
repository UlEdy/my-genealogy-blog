//interface
import { NavItemProps } from '@/interface/interface';

//style
import { TextStyle } from '@styles';
import { SingleNavItem } from './Navigation.styles';

const NavItem: React.FC<NavItemProps> = ({ label, isShow }) => {
    return (
        <SingleNavItem isShow={isShow}>
            <TextStyle>{label}</TextStyle>
        </SingleNavItem>
    );
};

export default NavItem;
