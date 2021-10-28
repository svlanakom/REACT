import React, { useState } from "react";
import Counter from "./Counter.jsx";
import Postitem from "./Postitem.jsx";
import PostList from "./PostList.jsx";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "JavaScript", body: "dascriptions" },
    { id: 2, title: "JavaScr", body: "dascription" },
    { id: 3, title: "JavaS", body: "dascription" },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPost([...posts, newPost]);
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <form>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="название поста"
        />
        <Input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          laceholder="описание поста"
        />
        <Button onClick={addNewPost}>Создать пост</Button>
      </form>
      <PostList posts={posts} title={"список постов 1"} />;
    </div>
  );
}

export default App;
