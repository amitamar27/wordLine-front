"use client";

import React, { useEffect, useState } from "react";
import { PostsList } from "@components/Posts/PostsList";
import { postsService } from "../../services/postsService";
import { Layout } from "@components/Layout";

export default function posts({ allPosts }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [posts, setPosts] = useState(allPosts);

    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await postsService.addPost({ title, content });
        if (!res || !res.post) return;
        setPosts([...posts, res.post]);
    };

    return (
        <Layout>
            <p>ADD</p>
            <PostsList
                posts={posts}
                deletePostLocal={(post) => {
                    setPosts(posts.filter((p) => p.id !== post.id));
                }}
            />
            {/*  title, content */}
            <div className="grid place-items-center">
                <form
                    onSubmit={onSubmit}
                    className="grid border gap-y-2 py-2 px-10 w-96"
                >
                    <input
                        className="border rounded-lg"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        placeholder="title"
                    />
                    <input
                        className="border rounded-lg"
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        type="text"
                        placeholder="content"
                    />
                    <button type="submit">send</button>
                </form>
            </div>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const { req } = context;
    const data = await postsService.fetchPosts();

    return {
        props: {
            allPosts: data?.posts ?? []
        }
    };
}
