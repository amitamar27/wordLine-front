import React from "react";
import PostsPreview from "./PostsPreview";

export function PostsList({ posts, deletePostLocal }) {
    return (
        <section className="list-container">
            {posts.map((post) => (
                <PostsPreview
                    key={post.id}
                    deletePostLocal={deletePostLocal}
                    post={post}
                />
            ))}
        </section>
    );
}
