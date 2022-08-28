import axios from "axios";
import { useState, useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
const endpoint = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(endpoint);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  //get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //paginate page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <h1 className="text-primary mt-5 mb-4">My List</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}
