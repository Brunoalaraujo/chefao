import * as C from './styles';
import  Header  from '../Header'
import  Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { renderPosts } from '../../services/Posts'
import { useEffect, useState } from 'react';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { IPost } from '../../@types';


 /* type Post = {
    
    album: string;
    assets: object;
    nickname: string;
} */

export const PostFeed = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(()=>{
        const getData = async () => {
            try {
                const accessToken = window.localStorage.getItem("token")
                
           const response =  await renderPosts(accessToken);
          console.log(response)
           setPosts(response)
            } catch (error) {
                console.log("Deu algo errado" + error)
            }
        }
        getData();
    }, [])
    
 /* async function getPosts() {
    const accessToken = window.localStorage.getItem("token")
     await renderPosts(accessToken)
     .then(response => {
        setPosts(response.data)
     })
}
    useEffect(() => {
        getPosts()    
      }, []);*/
   /*8   let rows = []
    for (let i = 0; i < posts.length ; i++) {
      rows.push(<li>User: {posts[i].user?.nickname}</li>)
    } */
    return(
        <>
       <Header/>
       <C.Container>
        
            {posts.map((post, index)=> {
                return (<CardGroup key={index}>
                    <Card>
                    <Card.Body >
                        <Card.Title>
                       <strong>{post.user?.nickname}</strong>
        
                        </Card.Title>
                    </Card.Body>
                    </Card>
                    </CardGroup> 
                    )
            })}
            

       

       </C.Container>
       </>
    )
}