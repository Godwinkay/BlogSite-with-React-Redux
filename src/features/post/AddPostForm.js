import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postSlice";
import { allSelectedUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(allSelectedUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));

      setTitle("");
      setContent("");
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.author}
    </option>
  ));

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <div className="flex flex-col justify-center mx-auto w-full items-center mt-12 gap-5">
      <h2 className="text-3xl uppercase font-bold font-sans">Add a New Post</h2>
      <form className="w-[400px] md:w-[600px] space-y-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="postTitle">
            <b>Post Title:</b>
          </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
            className="border-[1px] py-1"
          />
        </div>

        <div className="flex flex-col gap-3">
        <label htmlFor="postAuthor">
          <b>Author:</b>
        </label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged} className="border-[1px] py-1">
          <option></option>
          {usersOptions}
        </select>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="postContent">
            <b>Content:</b>
          </label>
          <textarea
            type="text"
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
            rows={3}
            className="border-[1px]"
          />
        </div>

        <button
          className="bg-green-400 p-2 rounded-md text-white"
          type="button"
          onClick={onSavePostClicked}
          disabled= {!canSave}
        >
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
