import React from 'react'
import { Navigate } from "react-router-dom"
import postlist from "../../posts.json"
import ReactMarkdown from "react-markdown"
import "../../styles/Post.css";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";

const Post = () => {
    const {id} = useParams();
    const validId = parseInt(id);
    if (!validId) {
        return <Navigate to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExists = true
        }
    })
    if(!postExists) {
        return <Navigate to="/404" />
    }
  return (
    <div className='me-auto ms-auto mt-4' style={{maxWidth:"850px"}}>
        <small>{fetchedPost.date}</small>
        <div className='p-1'>
        <ReactMarkdown children={fetchedPost.content} escapeHtml={false} />
        </div>
    </div>
  )
}

export default Post