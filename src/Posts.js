import { useLayoutEffect } from "react";
import LoadingSpin from "react-loading-spin";

export default function Posts({ posts, loading }) {
  if (loading) {
    return <LoadingSpin />;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
}
