import React, { useEffect, useState } from "react";
import {addDoc, collection} from "firebase/firestore";
import {db, auth} from '../firebase-config'
import {useNavigate} from "react-router-dom";
function CreatePost({isAuth}) {
    const [title, setTitle] = useState("");
    const [postText, setText] = useState("");
    const postCollectionRef = collection(db, "posts");
    let navigate = useNavigate();
    const createPost = async ()=>{
        await addDoc(postCollectionRef, {title, postText, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}});
        navigate("/")
    }
    useEffect(() => {
        if(!isAuth) {
            navigate("/login")
        }
    },[]);
    return <div className="createPostPage">
        <div className="postContainer">
            <h1>Create A Post</h1>
            <div className="inputGp">
                <label>Title: </label>
                <input placeholder="Title..." onChange={
                    (event)=>{setTitle(event.target.value)}
                }/>
            </div>
            <div className="inputGp">
                <label>Post: </label>
                <textarea placeholder="Post"onChange={(event)=>{
                    setText(event.target.value)
                }}/>
            </div>
            <button onClick={createPost}>Create post</button>
        </div>

    </div>
}

export default CreatePost;