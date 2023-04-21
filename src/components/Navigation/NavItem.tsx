//interface
import { NavItemProps } from '@/interface/interface';

//style
import { SingleNavItem } from './Navigation.styles';

const NavItem: React.FC<NavItemProps> = ({ label, isShow }) => {
    return <SingleNavItem isShow={isShow}>{label}</SingleNavItem>;
};

export default NavItem;
