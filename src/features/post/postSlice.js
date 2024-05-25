import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id:1, title: "Half A Yellow Sun", content: "This book was written by a Nigerian called Chimamanda Adichie Ngozie"},
    {id:2, title: "The Subtle Art Of Not Giving A Fuck", content: "This is a thought provoking book written by Mark Mason"},
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
        },
        prepare(title, content, userId) {
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    userId
                }
        }
        }
    }
    }
})

export const selectAllPosts = (state) => state.posts
export const { postAdded }= postSlice.actions
export default postSlice.reducer