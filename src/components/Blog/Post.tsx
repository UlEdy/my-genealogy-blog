import { PostProps } from '@interface';

export const Post: React.FC<PostProps> = ({ title, text, image }) => {
    return (
        <>
            <h3>{title}</h3>
            <p>{text}</p>
            <img src={image} />
        </>
    );
};
