import { useState, useEffect, FC } from 'react';
import axios from 'axios';

//components
import { Post } from './Post';

const postList = [
    {
        title: 'Tytuł 1',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam distinctio aliquid, ipsa explicabo exercitationem rem dolorem aperiam quae incidunt nam. Odio ipsam nisi expedita repellat porro quo eligendi blanditiis corrupti voluptatem laborum sunt ad numquam libero nostrum aliquid assumenda fugiat dolor, mollitia rem sint. Cum rem unde totam minus molestiae.',
    },
    {
        title: 'Tytuł 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo unde ut ducimus facere illum mollitia voluptatum fugiat tempora accusantium magni est quidem aliquam doloribus et quae officia a maxime minima blanditiis, optio similique debitis dolor dicta. Officia nemo suscipit ipsum eos totam expedita laudantium modi, dolore ducimus ab laboriosam? Laborum possimus, nesciunt eligendi nam molestiae, impedit voluptas numquam fugiat nisi, velit id mollitia quasi. Deleniti, neque? Corporis consequuntur minus doloribus! Voluptatem, iste. At, qui fuga! Modi quos quisquam ab ea earum nemo itaque aliquam accusantium cupiditate iste a vero vitae, molestiae quidem laudantium rem consectetur consequuntur sit soluta tenetur architecto laborum quod. Repellendus, rem quam odit doloremque tenetur earum sequi. Tempora natus labore veritatis totam laudantium quia repudiandae tempore repellendus odit, voluptate minima quasi mollitia illum officiis, eius optio quibusdam nobis numquam quod animi quisquam expedita tenetur aspernatur repellat. Harum rem, molestias eum nobis, consequuntur totam minus inventore, nostrum quaerat cupiditate exercitationem dolores non quas? Cupiditate, sunt explicabo! Quae reprehenderit quam recusandae totam deserunt ullam soluta repudiandae, atque quo eaque perspiciatis magni vitae odit molestias, repellendus sunt nisi distinctio beatae fugiat! Vel odio ad non earum eum! Dolor dignissimos cumque, aliquid sit, rem corrupti possimus libero iste maiores sapiente perspiciatis nam ea est veniam blanditiis neque quasi animi beatae tempora ipsa accusantium voluptas nisi ex. Facere quam soluta minus repudiandae ipsam quaerat illum. Accusantium similique obcaecati maiores animi earum esse molestiae quo, explicabo praesentium neque excepturi commodi eligendi odio eveniet tenetur recusandae iste enim nobis ducimus nesciunt vitae distinctio! Temporibus?',
        image: 'https://cdn.pixabay.com/photo/2018/07/22/11/09/frame-3554310_960_720.jpg',
        aleText: 'Lorem...',
    },
    {
        title: 'Tytuł 3',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore porro praesentium magni cum doloribus doloremque ducimus odit placeat, a ea repudiandae reprehenderit qui cupiditate perspiciatis sunt quidem ullam voluptas accusamus ipsum expedita. Facere accusamus corporis tempore pariatur error dicta officiis corrupti quisquam ipsum possimus! Ab optio odit reprehenderit veniam totam quas vero recusandae quasi architecto harum illum, iure labore quo laudantium, dolores laborum quae necessitatibus. Doloribus illum, tempore, praesentium beatae aspernatur explicabo dolorum quia eos ratione modi perspiciatis culpa tempora!',
    },
];

export const Blog: FC = () => {
    return (
        <>
            {postList.map((post, index) => (
                <Post
                    key={`post-${index}`}
                    post={post}
                />
            ))}
        </>
    );
};
