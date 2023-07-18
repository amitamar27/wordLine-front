import React from "react";
import PostsPreview from "./PostsPreview";

export function PostsList({ posts }) {
    return (
        <section className="list-container">
            {posts.map((post) => (
                <PostsPreview key={post.id} post={post} />
            ))}
        </section>
    );
}
