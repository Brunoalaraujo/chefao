import Header from '../Header'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import BtnLink from '../BtnLink';

// import { renderPosts  } from '../../services/Posts'
import { useEffect, useState } from 'react';
import { Post } from '../../@types';

import * as C from './styles';

/* type Post = {
   
   album: string;
   assets: object;
   nickname: string;
} */

export const PostFeed = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const accessToken = window.localStorage.getItem("token");
    //             const response = await renderPosts(accessToken);
    //             setPosts(response.data)

    //         } catch (error) {
    //             console.log("Algo deu errado no Post" + error)
    //         }
    //     }
    //     getData();
    // }, [setPosts])
    return (
        <>
            <Header />
            <C.Container>
                {posts.map((post, index) =>
                    <CardGroup key={index}>
                        <Card>
                            <Card.Body >
                                <Card.Title>
                                    <strong>{post.user.name}</strong>
                                    <strong>{post.user.address.city}</strong>
                                    <strong>{post.assets.offer}</strong>
                                    <strong>{post.assets.want}</strong>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                )}
            </C.Container>
            <BtnLink redirect={"/newpost"}>
                Novo post
            </BtnLink>
        </>
    )
}