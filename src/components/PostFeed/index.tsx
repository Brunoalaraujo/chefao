// import React from "react";
// import ReactDOM from "react-dom";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import { useSelector } from "react-redux";
// import { RootStore } from "../../store";
// import { Post } from "../../@types";
// import BtnLink from "../../components/BtnLink";

// import * as S from './style';

// interface AddPostsProps {
//     postMessage: (users: Omit<Post, 'id'>) => void
// }
// const PostFeed: React.FC<AddPostsProps> = ({ postMessage }) => {
//     const navigate = useNavigate();
//     //     const userId = useSelector((store: RootStore) => store.usersSlice.id) as number;
//     //     const userName = useSelector((store: RootStore) => store.usersSlice.nome) as string;
//     //     const userEmail = useSelector((store: RootStore) => store.usersSlice.email) as string;

//     const formik = useFormik({
//         initialValues: {
//             id: '',
//             nome: '',
//             email: '',
//             comentario: ''
//         },
//         onSubmit: async (values, { resetForm }) => {
//             const data = await postMessage({ ...values, })//user_id: userId, nome: userName, email: userEmail
//             resetForm();

//         }
//     })

//     return (
//         < >
//             <h2>EDITE SUA POSTAGEN </h2>
//                 < S.Container >
//                     <a href='' onClick={() => navigate('/feed')}> </a>
//                 < S.CommentForm onSubmit={formik.handleSubmit} >

//                     <S.TextArea as='textarea' id='Legenda' placeholder='Insira uma legenda' rows={3} value={formik.values.comentario} onChange={formik.handleChange} />

//                     <h3>REPETIDAS </h3>
//                     < S.TextArea as='textarea' id='repetidas' placeholder='Insira os códigos, separando por vírgula' rows={3} value={formik.values.comentario} onChange={formik.handleChange} />
//                     <h3>PRECISO</h3>
//                     < S.TextArea as='textarea' id='preciso' placeholder='Insira os códigos, separando por vírgula' rows={3} value={formik.values.comentario} onChange={formik.handleChange} />

//                     <S.PostButton size='sm' type='submit' >
//                         <BtnLink redirect="/">
//                             Confirmar
//                         </BtnLink>
//                     </S.PostButton>
//                 </S.CommentForm>
//             </S.Container>
//         </>
//     )
// }

// export default PostFeed;

import React, { useState } from 'react';
import { render } from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';
import { string } from 'yup';



export const Figurinhas = () => {
  const [tags, setTags] = useState<string>("");

  const handleDelete = e => {
    setTags(tags.filter((tag, index) => index !== e));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  return (
    <div className="app">
      <h1> React Tags Example </h1>
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
        />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));