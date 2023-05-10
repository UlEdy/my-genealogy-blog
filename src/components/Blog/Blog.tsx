import { Post } from './Post';

const postList = [
    {
        title: 'Tytuł 1',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam distinctio aliquid, ipsa explicabo exercitationem rem dolorem aperiam quae incidunt nam. Odio ipsam nisi expedita repellat porro quo eligendi blanditiis corrupti voluptatem laborum sunt ad numquam libero nostrum aliquid assumenda fugiat dolor, mollitia rem sint. Cum rem unde totam minus molestiae.',
    },
    {
        title: 'Tytuł 2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio placeat commodi adipisci architecto, voluptas unde libero, dolore est omnis dolorum fugit eligendi harum! Facere, quidem repellendus voluptatibus est fugiat ipsum ea modi numquam, laboriosam repudiandae placeat! Consequatur reprehenderit sit, quae praesentium doloremque libero, aut magnam eos tempora dolorum beatae temporibus.',
        image: 'https://cdn.pixabay.com/photo/2018/07/22/11/09/frame-3554310_960_720.jpg',
    },
    {
        title: 'Tytuł 3',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore porro praesentium magni cum doloribus doloremque ducimus odit placeat, a ea repudiandae reprehenderit qui cupiditate perspiciatis sunt quidem ullam voluptas accusamus ipsum expedita. Facere accusamus corporis tempore pariatur error dicta officiis corrupti quisquam ipsum possimus! Ab optio odit reprehenderit veniam totam quas vero recusandae quasi architecto harum illum, iure labore quo laudantium, dolores laborum quae necessitatibus. Doloribus illum, tempore, praesentium beatae aspernatur explicabo dolorum quia eos ratione modi perspiciatis culpa tempora!',
    },
];

export const Blog: React.FC = () => {
    return (
        <>
            {postList.map((post, index) => (
                <Post
                    key={`post-${index}`}
                    text={post.text}
                    title={post.title}
                    image={post.image}
                />
            ))}
            ;
        </>
    );
};
