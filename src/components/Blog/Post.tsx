//components
import { FC } from 'react';
import { ContentPost, TitlePost, TextPost, ImagePost } from './Blog.styles';

//interface
import { PostProps } from '@interface';

export const Post: FC<PostProps> = ({ title, text, image, altText }) => {
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
