export interface HeaderProps {
    header: string;
    quote: string;
}

export interface NavItemProps {
    label: string;
    isShow: boolean;
    path: string;
}

export type ImageProps = {
    image?: string;
    altText?: string;
};

export interface PostProps extends ImageProps {
    text: string;
    title: string;
}

export interface ShowingProps {
    isShow?: boolean;
}
export interface TextStyleProps {
    shadow?: boolean;
}
