export interface HeaderProps {
    header: string;
    quote: string;
}

export interface NavItemProps {
    label: string;
    isShow: boolean;
    path: string;
}

export interface PostProps {
    text: string;
    title: string;
    image?: string;
}

export interface ShowingProps {
    isShow?: boolean;
}
export interface TextStyleProps {
    shadow?: boolean;
}
