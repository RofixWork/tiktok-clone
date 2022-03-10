import "./App.css";
import Video from "./components/Video/Video";
import axios from "./axios";
import { useEffect, useState } from "react";
function App() {
  const [posts, setPosts] = useState([]);
  const getAllPosts = async () => {
    const {
      data: { posts },
    } = await axios.get("/posts");
    setPosts(posts);
  };

  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div className="app">
      <div className="app__container">
        {posts.length ? (
          <>
            {posts?.map((post) => {
              return (
                <Video
                  key={post._id}
                  url={post.url}
                  channel={post.channel}
                  description={post.description}
                  song={post.song}
                  likes={Number(post.likes)}
                  shares={post.shares}
                  messages={post.messages}
                />
              );
            })}
          </>
        ) : (
          <h3 className="loading">Loading...</h3>
        )}
      </div>
    </div>
  );
}

export default App;
