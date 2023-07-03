import { FC, useEffect, useState } from 'react';
import axios from 'axios';

//components
import { Post } from '../../components/Blog/Post';

//interface
import { AboutMeProps } from '@interface';

export const AboutMe: FC = () => {
    const [aboutMeText, setAboutMeText] = useState<
        AboutMeProps | Record<string, any>
    >({});
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setAboutMeText(response.data);
            })
            .catch((error: Error) => console.error(error));
    }, []);
    const { body, title } = aboutMeText;
    return (
        <Post
            text={body}
            title={title}
        />
    );
};
