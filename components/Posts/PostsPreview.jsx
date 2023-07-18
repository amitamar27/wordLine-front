import React from 'react'
import Link from "next/link";

export default function PostsPreview({ post }) {
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
          <Link  href={`/posts/${post.id}`}>Details</Link>
        </div>
      </div>
    );
}
