import { useState } from "react";
import { fetchPosts } from "./api";
import { useQuery } from "@tanstack/react-query";
import PostDetail from "./PostDetail";

export default function Posts() {
  const [selectedPost, setSelectedPost] = useState(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post"], // 해당 쿼리를 cache와 stale time 관점에서 식별하는 방법
    queryFn: fetchPosts,
    staleTime: 3000, // 기본값 0(항상 최신의 데이터 지향)
  });

  if (isLoading) {
    return <h3>loading...</h3>;
  }

  if (isError) {
    return <h3>에러 발생: {error.message}</h3>;
  }

  // if (!data) {
  //   return <div></div>;
  // }

  return (
    <>
      <ul>
        {data.length > 0 &&
          data.map((post) => (
            <li
              key={post.id}
              style={{
                listStyleType: "none",
                cursor: "pointer",
                fontWeight: selectedPost === post.id && "bold",
              }}
              onClick={() => {
                console.log(post.id);
                setSelectedPost(post.id);
              }}
            >
              {post.id}.{post.title}
            </li>
          ))}
      </ul>
      <PostDetail selectedPost={selectedPost} />
      {/* <div>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
          Prev
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div> */}
    </>
  );
}