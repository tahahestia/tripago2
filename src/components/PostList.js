import React, { useState } from "react";
import "./TripList.css";
import useFetch from "./../hooks/useFetch";

const PostList = () => {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
  const { data: posts, loading } = useFetch(url);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4 }}>
        <div>
          <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts?userId=1")}>
            User 1
          </button>
        </div>
        <div>
          <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts?userId=2")}>
            User 2
          </button>
        </div>
        <div>
          <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts?userId=3")}>
            User 3
          </button>
        </div>
        <div>
          <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts?userId=4")}>
            User 4
          </button>
        </div>
        <div>
          <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts")}>All</button>
        </div>
      </div>

      <ul>
        {loading
          ? "Loading"
          : posts &&
            posts.map((post, i) => (
              <li key={i}>
                <h3>
                  {post.userId} - {post.title}
                </h3>
                <p>{post.body}</p>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default PostList;
