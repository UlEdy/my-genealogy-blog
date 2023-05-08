import { ThemedStyledProps } from 'styled-components';

export interface HeaderProps {
    header: string;
    quote: string;
}

export interface NavItemProps {
    label: string;
    isShow: boolean;
    path: string;
}

export interface SingleNavItemProps {
    isShow?: boolean;
}
export interface TextStyleProps {
    shadow?: boolean;
}
