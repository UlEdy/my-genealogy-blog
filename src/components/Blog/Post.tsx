//components
import { ContentPost, TitlePost, TextPost, ImagePost } from './Blog.styles';

//interface
import { PostProps } from '@interface';

export const Post: React.FC<PostProps> = ({ title, text, image, altText }) => {
    console.log(Boolean(image));
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
