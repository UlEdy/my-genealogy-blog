//components
import { FC } from 'react';
import { ContentPost, TitlePost, TextPost, ImagePost } from './Blog.styles';

//interface
import { PostProps } from '@interface';

export const Post: FC<PostProps> = ({ post }) => {
    const { image, title, altText, text } = post;
    return (
        <>
            <TitlePost>{title}</TitlePost>
            <ContentPost>
                {image && (
                    <ImagePost
                        src={image}
                        alt={altText}
                    />
                )}
                <TextPost>{text}</TextPost>
            </ContentPost>
        </>
    );
};
