import React from "react";
import PostColai from "../../components/PostFeed";
import usePosts from "../../hooks/posts";


// const PostFeeds: React.FC = () => {
//     const { postList, handleAddPost } = usePosts();
//     return (
//         <PostColai postMessage={handleAddPost} />
//     );
// };

// export default PostFeeds;


import NewPost from "../../components/PostFeed"; 

export default function PostFeeds() {
    return(
        <NewPost/>
    )
}