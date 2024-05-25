import { selectAllPosts} from "./postSlice";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";

import React from 'react'

const PostsList = () => {

const posts = useSelector(selectAllPosts) 
const renderedPosts = posts.map((post) => (
    <article key={post.id}>
    <div className="p-4 border-[2px] border-black/50 mb-5 rounded-md w-[400px] md:w-[600px]">
        <h2 className="font-bold mb-3 capitalize font-serif text-xl">{post.title}</h2>
        <p>{post.content.substring(0, 100)}...</p>
        <p className="font-medium mt-4">
            <PostAuthor userId={post.userId} />
        </p>
    </div>
    </article>
))

  return (
    <div className="flex flex-col w-full items-center justify-center mt-8">
    <h1 className="mb-3 text-2xl font-bold font-serif">Posts</h1>
      {renderedPosts}
    </div>
  )
}

export default PostsList
