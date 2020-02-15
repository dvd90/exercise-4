import React, { useEffect, useState } from "react";
import axios from "axios";
import ListElement from "./ListElement";

const List = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      setPosts(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="list-box">
      <ul className="list">
        {posts.map(post => (
          <ListElement component={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
};

export default List;
