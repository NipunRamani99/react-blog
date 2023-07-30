import React, { useEffect } from 'react'
import { useState } from "react";
import {getDocs, collection} from "firebase/firestore";
import {db} from "../firebase-config";
function Home() {
    const [postLists, setPostList] = useState([]);
    const postCollectionRef = collection(db, "posts");
    const getPosts = async () => {
        return getDocs(postCollectionRef);
    };
    useEffect(() => {
        getPosts().then((data)=>{
            setPostList(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
        })
    },[]);

    return (<div className="homePage">
        {postLists.map((post) => {
            return <div key={post.id} className="post"> 
             <div className="postHeader">
                <div className="title">
                <h1>{post.title}</h1>
                </div>
            </div>
            <div className = "postTextContainer">{post.postText}</div>
            <h3>@{post.author.name}</h3>
            </div>;
        })}
    </div>);
}

export default Home;
