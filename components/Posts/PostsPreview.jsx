import React from "react";
import Link from "next/link";
import { postsService } from "../../services/postsService";

export default function PostsPreview({ post, deletePostLocal }) {
    const deletePostFromDb = () => {
        postsService.deletePost(post.id);
    };
    return (
        <div className="post-card">
            <div className="post-card-content">
                <h2 className="post-card-title">{post.title}</h2>
                <div
                    className="post-card-body"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
            <div className="control-inputs">
                <Link href={`/posts/${post.id}`}>Details</Link>
                <Link href={`/edit/${post.id}`}>Edit</Link>
                <button
                    onClick={() => {
                        deletePostFromDb(post);
                        deletePostLocal(post);
                    }}
                >
                    X
                </button>
            </div>
        </div>
    );
}
