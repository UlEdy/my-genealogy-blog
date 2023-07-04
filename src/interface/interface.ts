export interface HeaderProps {
    header: string;
    quote: string;
}

export interface NavItemProps {
    label: string;
    isVisible: boolean;
    path: string;
}

export type ImageProps = {
    image?: string;
    altText?: string;
};

export interface PostProps {
    post: { text: string; title: string; image?: string; altText?: string };
}

export interface AboutMeProps {
    body: string;
    title: string;
}

export interface ShowingProps {
    isShow?: boolean;
}
export interface TextStyleProps {
    shadow?: boolean;
}
