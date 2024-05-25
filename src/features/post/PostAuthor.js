import { useSelector } from "react-redux";
import { allSelectedUsers } from "../users/usersSlice";

import React from 'react'

const PostAuthor = ({userId}) => {
 const users = useSelector(allSelectedUsers)

 const author = users.find(user => user.id === userId)

 return <span> By {author ? author.author : 'Unknown Author'}</span>
}

export default PostAuthor
