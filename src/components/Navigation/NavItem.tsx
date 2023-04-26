//interface
import { NavItemProps } from '@/interface/interface';

//style
import { TextStyle } from '@styles';
import { SingleNavItem } from './Navigation.styles';

const NavItem: React.FC<NavItemProps> = ({ label, isShow, path }) => {
    return (
        <SingleNavItem
            isShow={isShow}
            to={path}
        >
            <TextStyle>{label}</TextStyle>
        </SingleNavItem>
    );
};

export default NavItem;
