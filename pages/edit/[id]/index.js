
import React, { useState } from "react";
import { postsService } from "../../../services/postsService";
import { Layout } from "@components/Layout";
import Link from "next/link";

export default function EditPage({ post }) {
  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await postsService.editPost({ title, content, id: post.id });
  };

  return (
    <Layout>
      <div className="card">
        <form onSubmit={onSubmit} className="cardContent grid gap-y-2">
          <h2>Edit</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {/* <p className="content">{post.content}</p> */}
          <button className="px-2 bg-green-500 text-white rounded-lg">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const post = await postsService.getPostById(query.id);
  console.log(post);
  return {
    props: {
      post,
    },
  };
}
